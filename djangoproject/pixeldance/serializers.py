from rest_framework import serializers
from .models import Dancer, DancePath

class DancerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dancer
        fields = ['url', 'id', 'color', 'session_id', 'created_at']


class DancePathSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DancePath
        fields = ['url', 'dancer', 'start_x', 'start_y', 'end_x', 'end_y', 'delta_x', 'delta_y', 'event_timestamp', 'click_time_delta']

    