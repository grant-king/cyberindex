from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from techprojects.models import (
    ProjectUser, Location, ProjectRegistration, ProjectResourceLink,
    )
from techprojects.serializers import (
    ProjectUserSerializer, LocationSerializer, ProjectRegistrationSerializer, ProjectResourceLinkSerializer,
    )


class ProjectUserViewSet(viewsets.ModelViewSet):
    queryset = ProjectUser.objects.all()
    serializer_class = ProjectUserSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def get_create_projectuser(self, request):
        user = request.user
        try:
            project_user = ProjectUser.objects.get(user=user)
        except ProjectUser.DoesNotExist:
            project_user = ProjectUser(user=user)
            project_user.save()
        serializer = ProjectUserSerializer(project_user)
        return Response(serializer.data)


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [IsAuthenticated]


class ProjectRegistrationViewSet(viewsets.ModelViewSet):
    queryset = ProjectRegistration.objects.all()
    serializer_class = ProjectRegistrationSerializer
    permission_classes = [IsAuthenticated]


class ProjectResourceLinkViewSet(viewsets.ModelViewSet):
    queryset = ProjectResourceLink.objects.all()
    serializer_class = ProjectResourceLinkSerializer
    permission_classes = [IsAuthenticated]

