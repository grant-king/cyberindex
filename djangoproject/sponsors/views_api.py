
from django.contrib.auth.models import User
from django.contrib.auth import login, logout
from rest_framework import permissions, status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from .models import Sponsor, SponsorProfile

from .serializers import LoginSerializer
from .serializers import SponsorProfileSerializer, SponsorSerializer, SponsorMessageSerializer, SponsorContributionSerializer
from rest_framework.decorators import action

class LoginView(APIView):
    """
    API endpoint that allows sponsors to login.
    """
    permission_classes = [permissions.AllowAny]
    authentication_classes = [SessionAuthentication]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            login(request, user)
            return Response({'message': 'logged in successfully'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class LogoutView(APIView):
    """
    API endpoint that allows sponsors to logout.
    """
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        logout(request)
        return Response({'message': 'logged out successfully'})
    

class RegisterView(APIView):
    """
    API endpoint that allows sponsors to register.
    """
    permission_classes = [permissions.AllowAny]
    def post(self, request):

        username = request.data.get('email')
        password = request.data.get('password')
        email = request.data.get('email')
        if password and email:
            try:
                user = User.objects.create_user(username, email, password)
                user.save()
                login(request, user)
            
                return Response({'message': 'user created successfully'})
            
            except Exception as e:
                return Response({'message': f'{e}'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'message': 'username, password, and email are required'}, status=status.HTTP_400_BAD_REQUEST)


class SponsorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sponsors to be viewed or edited.
    """
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Sponsor.objects.filter(archived=False)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
    
    def perform_destroy(self, instance):
        if instance.user == self.request.user:
            instance.archived = True
            instance.save()
        else:
            pass


class SponsorProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sponsors to be viewed or edited.
    """
    queryset = SponsorProfile.objects.all()
    serializer_class = SponsorProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return SponsorProfile.objects.filter(sponsor__archived=False)
    
    def perform_create(self, serializer):
        sponsor, created = Sponsor.objects.get_or_create(user=self.request.user)
        serializer.save(sponsor=self.request.user.sponsor)
    
    def perform_update(self, serializer):
        serializer.save(sponsor=self.request.user.sponsor)
    
    def perform_destroy(self, instance):
        if instance.sponsor.user == self.request.user:
            instance.sponsor.archived = True
            instance.save()
        else:
            pass
