from rest_framework import serializers
from buildforge.models import Voxel, Claim, PlacementPromise, Builder


class VoxelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Voxel
        fields = ["pk", "color", "x", "y", "z"]


class ClaimSerializer(serializers.ModelSerializer):

    class Meta:
        model = Claim
        fields = ["voxel", "session_id", "timestamp", "is_holding"]


class PlacementPromiseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PlacementPromise
        fields = ["voxel", "session_id", "x", "y", "z", "is_placed"]


class BuilderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Builder
        fields = ["session_id", "x", "y", "z", "edit_plane"]