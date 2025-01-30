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


class AvatarViewSet(viewsets.ViewSet):
    """
    Simple viewset for creating or retrieving public avatar info.
    """
    permission_classes = [permissions.AllowAny]
    authentication_classes = [SessionAuthentication]

    def list(self, request):
        session_key = self.request.session.session_key
        avatars = Avatar.objects.filter(session_key=session_key)
        serializer = AvatarSerializer(avatars, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AvatarCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        dotenv.load_dotenv()
        avatar_hash_secret = os.getenv('AVATAR_HASH_SECRET')
        # create session if it doesn't exist
        session_key = self.request.session.session_key
        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key

        original_hash = serializer.validated_data['original_hash']

        # create public hash of secret image hash and secret session key
        public_hash = hmac.new(
            avatar_hash_secret.encode(),
            original_hash.encode(),
            hashlib.sha256,
        ).hexdigest()


        serializer.save(session_key=session_key, public_hash=public_hash)

        return Response(serializer.data)

    