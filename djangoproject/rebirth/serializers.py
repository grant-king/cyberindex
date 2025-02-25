from rest_framework import serializers
from rebirth.models import Avatar

class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avatar
        fields = ['session_id', 'public_image', 'public_hash', 'created_at']


class AvatarCreateSerializer(serializers.ModelSerializer):
    original_hash = serializers.CharField(write_only=True)

    class Meta:
        model = Avatar
        fields = ['original_hash', 'public_image']
