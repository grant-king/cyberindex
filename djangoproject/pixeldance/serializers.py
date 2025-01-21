from rest_framework import serializers
from .models import Dancer, DancePath

class DancerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dancer
        fields = ['id', 'color', 'session_id', 'created_at']


class DancePathSerializer(serializers.ModelSerializer):
    class Meta:
        model = DancePath
        fields = ['id', 'dancer', 'start_x', 'start_y', 'end_x', 'end_y', 'delta_x', 'delta_y', 'event_timestamp', 'click_time_delta']

    