from rest_framework import permissions, status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rebirth.models import Avatar
from rebirth.serializers import AvatarSerializer, AvatarCreateSerializer
from rest_framework.decorators import action
import hmac
import hashlib
import os
import dotenv

# models from other apps with session key - for session stats and linked avatar stats
from techprojects.models import ProjectRegistration
from pixeldance.models import Dancer
from sponsors.models import MeditationRead


class AvatarViewSet(viewsets.ViewSet):
    """
    Simple viewset for creating or retrieving public avatar info.
    """

    permission_classes = [permissions.AllowAny]
    authentication_classes = [SessionAuthentication]

    def list(self, request):
        session_key = self.request.session.session_key
        avatars = Avatar.objects.filter(session_key=session_key)
        linked_avatars = Avatar.objects.filter(
            public_hash__in=[avatar.public_hash for avatar in avatars]
        )
        combined_list = list(avatars) + list(linked_avatars)
        serializer = AvatarSerializer(linked_avatars, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AvatarCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        dotenv.load_dotenv()
        avatar_hash_secret = os.getenv("AVATAR_HASH_SECRET")
        # create session if it doesn't exist
        session_key = self.request.session.session_key
        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key

        original_hash = serializer.validated_data["original_hash"]

        # create public hash of secret image hash and secret session key
        public_hash = hmac.new(
            avatar_hash_secret.encode(),
            original_hash.encode(),
            hashlib.sha256,
        ).hexdigest()

        # rename file to public hash
        serializer.validated_data["public_image"].name = public_hash + ".webp"

        serializer.save(session_key=session_key, public_hash=public_hash)

        return Response(serializer.data)

    @action(detail=False, methods=["get"])
    def session_stats(self, request):
        session_key = self.request.session.session_key
        avatars = Avatar.objects.filter(session_key=session_key)
        dancers = Dancer.objects.filter(session_key=session_key)
        reflections = MeditationRead.objects.filter(reader_session_key=session_key)
        return Response(
            {
                "avatars": {
                    "public_images": [avatar.public_image.url for avatar in avatars],
                },
                "dancers": len(dancers),
                "reflections": len(reflections),
            }
        )
    
    @action(detail=False, methods=["get"])
    def linked_stats(self, request):
        session_key = self.request.session.session_key
        avatars = Avatar.objects.filter(session_key=session_key)
        linked_avatars = Avatar.objects.filter(
            public_hash__in=[avatar.public_hash for avatar in avatars]
        )
        linked_dancers = Dancer.objects.filter(
            session_key__in=[avatar.session_key for avatar in linked_avatars]
        )
        linked_reflections = MeditationRead.objects.filter(
            reader_session_key__in=[avatar.session_key for avatar in linked_avatars]
        )
        return Response(
            {
                "linked_avatars": 
                    {
                        "public_images": [avatar.public_image.url for avatar in linked_avatars],
                    },
                "linked_dancers": len(linked_dancers),
                "linked_reflections": len(linked_reflections),
            }
        )
