from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from techprojects.models import (
    Location, ProjectRegistration, ProjectResourceLink,
    )
from techprojects.serializers import (
    LocationSerializer, ProjectRegistrationSerializer, ProjectResourceLinkSerializer,
    )

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class ProjectRegistrationViewSet(viewsets.ModelViewSet):
    queryset = ProjectRegistration.objects.all()
    serializer_class = ProjectRegistrationSerializer

    def create(self, request, *args, **kwargs):
        repository_url = request.data.get('repository_url')
        repo_details = request.data.get('repo_details')
        
        try:
            instance, created = ProjectRegistration.objects.get_or_update_from_repo(
                repository_url=repository_url,
                repo_details=repo_details
            )
            serializer = self.get_serializer(instance)
            status_code = status.HTTP_201_CREATED if created else status.HTTP_200_OK
            return Response(serializer.data, status=status_code)
        except ValueError as e:
            return Response(
                {'error': str(e)}, 
                status=status.HTTP_400_BAD_REQUEST
            )

class ProjectResourceLinkViewSet(viewsets.ModelViewSet):
    queryset = ProjectResourceLink.objects.all()
    serializer_class = ProjectResourceLinkSerializer

