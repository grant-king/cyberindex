
from django.contrib.auth.models import User
from django.contrib.auth import login, logout
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication

from .serializers import LoginSerializer

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
    