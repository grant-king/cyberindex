from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import Sponsor, SponsorProfile, SponsorMessage, SponsorContribution

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
    
class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ['id', 'user', 'archived']

    
class SponsorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SponsorProfile
        fields = ['rep_name', 'rep_role', 'rep_image_url', 'company_name', 'company_logo_url', 'company_website']


class SponsorMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SponsorMessage
        fields = ['message', 'created_at']
    

class SponsorContributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SponsorContribution
        fields = ['amount', 'created_at']
        