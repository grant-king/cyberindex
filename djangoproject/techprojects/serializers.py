from rest_framework import serializers
from techprojects.models import (
    Location, ProjectRegistration, ProjectResourceLink,
    )

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class ProjectResourceLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectResourceLink
        fields = '__all__'


class ProjectRegistrationSerializer(serializers.HyperlinkedModelSerializer):
    location = LocationSerializer(read_only=True)
    resource_links = ProjectResourceLinkSerializer(many=True, read_only=True)
    class Meta:
        model = ProjectRegistration
        fields = ['url', 'location', 'name', 'submission_date', 'last_updated', 'image_url', 'repository_url', 'repo_details', 'resource_links']


