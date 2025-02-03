from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView

from buildforge.models import Voxel, Claim, PlacementPromise, Builder
from buildforge.serializers import (
    VoxelSerializer,
    ClaimSerializer,
    PlacementPromiseSerializer,
    BuilderSerializer,
)

class VoxelViewSet(viewsets.ModelViewSet):
    queryset = Voxel.objects.all()
    serializer_class = VoxelSerializer