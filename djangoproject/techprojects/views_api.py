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


class ProjectResourceLinkViewSet(viewsets.ModelViewSet):
    queryset = ProjectResourceLink.objects.all()
    serializer_class = ProjectResourceLinkSerializer

