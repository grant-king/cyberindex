from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action

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

    @action(detail=False, methods=['get']) # add 8x8x1 plane of voxels
    def plane(self, request):
        for x in range(8):
            for y in range(8):
                for z in range(1):
                    Voxel.objects.create(x=x, y=y, z=z, color="ffffff")
        return Response(status=status.HTTP_201_CREATED)