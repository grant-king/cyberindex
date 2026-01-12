from cultomatic.models import Animation, Creator
from rest_framework import serializers


class CreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creator
        fields = ["id"]


class AnimationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animation
        fields = ["id", "image", "sheet_size", "frame_size", "fps", "info"]


class AnimationExportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animation
        fields = ["id", "image"]