from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from cultomatic.models import Animation, Creator
from django.contrib.auth.models import User
from django.contrib.auth import login
from cultomatic.serializers import AnimationSerializer, CreatorSerializer, AnimationExportSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser

class RegisterView(APIView):
    """
    RegisterView creates a new User with a username and password and creates and relates a new Creator
    """

    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if username and password:
            try:
                user = User.objects.create_user(username, None, password)
                user.save()
                # create new Creator related to user
                creator = Creator(user=user)
                creator.save()
                return Response({"creator": CreatorSerializer(creator).data}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"message": f"{e}"}, status=status.HTTP_400_BAD_REQUEST)

        return Response(
            {"message": "username, password, and email are required"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class CreatorViewSet(viewsets.ModelViewSet):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Creator.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AnimationViewSet(viewsets.ModelViewSet):
    queryset = Animation.objects.all()
    serializer_class = AnimationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Animation.objects.filter(creator__user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user.creator)


class AnimationExportView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        start_date = request.data.get("start_date")
        end_date = request.data.get("end_date")
        animations = Animation.objects.filter(created_at__gte=start_date, created_at__lte=end_date)
        serializer = AnimationExportSerializer(animations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
