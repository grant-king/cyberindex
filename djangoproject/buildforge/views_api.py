from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
import random
from rest_framework.pagination import PageNumberPagination

from buildforge.models import Voxel, Claim, PlacementPromise, Builder
from buildforge.serializers import (
    VoxelSerializer,
    ClaimSerializer,
    PlacementPromiseSerializer,
    BuilderSerializer,
)

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 1000


class VoxelViewSet(viewsets.ModelViewSet):
    queryset = Voxel.objects.all()
    serializer_class = VoxelSerializer
    pagination_class = LargeResultsSetPagination

    @action(detail=False, methods=['get']) # add 8x8x1 plane of voxels
    def plane(self, request):
        for x in range(-8, 8):
            for y in range(1):
                for z in range(-8, 8):
                    random_color = "%06x" % random.randint(0, 0xFFFFFF)
                    Voxel.objects.create(x=x, y=y, z=z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)