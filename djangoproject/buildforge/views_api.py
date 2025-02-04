from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
import random
from rest_framework.pagination import PageNumberPagination
# import Q
from django.db.models import Q

from buildforge.models import Voxel, Claim, PlacementPromise, Builder
from buildforge.serializers import (
    VoxelSerializer,
    ClaimSerializer,
    PlacementPromiseSerializer,
    BuilderSerializer,
)

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 2000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class VoxelViewSet(viewsets.ModelViewSet):
    queryset = Voxel.objects.all()
    serializer_class = VoxelSerializer
    pagination_class = LargeResultsSetPagination

    def get_queryset(self):
        # complex filter with q
        # filter by objects with claim = None
        # or with claim and is_holding = False

        return Voxel.objects.filter(Q(claim__isnull=True) | Q(claim__is_holding=False))
        

    @action(detail=False, methods=['get']) # add 8x1xN plane of voxels
    def plane(self, request):
        for x in range(-16, 16):
            for y in range(-2, -1):
                for z in range(-32, -8):
                    random_color = "%06x" % random.randint(0, 0xFFFFFF)
                    Voxel.objects.create(x=x, y=y, z=z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['get']) # add 1xNx1 tower of voxels
    def tower(self, request):
        random_x = random.randint(-8, 8)
        random_z = random.randint(-32, -8)
        random_y = random.randint(1, 16)
        for x in range(1):
            for y in range(1, random_y):
                for z in range(1):
                    random_color = "%06x" % random.randint(0, 0xFFFFFF)
                    Voxel.objects.create(x=random_x, y=y, z=random_z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)
    
class ClaimViewSet(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer

    def perform_create(self, serializer):
        serializer.save(session_key=self.request.session.session_key)
