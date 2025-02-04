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
    page_size = 30000
    page_size_query_param = "page_size"
    max_page_size = 60000


class VoxelViewSet(viewsets.ModelViewSet):
    queryset = Voxel.objects.all()
    serializer_class = VoxelSerializer
    pagination_class = LargeResultsSetPagination

    def get_queryset(self):
        # complex filter with q
        # filter by objects with claim = None
        # or with claim and is_holding = False

        return Voxel.objects.filter(Q(claim__isnull=True) | Q(claim__is_holding=False))

    @action(detail=False, methods=["get"])  # clear all
    def clear_all(self, request):
        Voxel.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=["get"])  # add 8x1xN plane of voxels
    def plane(self, request):
        for x in range(-16, 16):
            for y in range(0, 1):
                for z in range(-16, 16):
                    random_color = "%06x" % random.randint(0, 0xFFFFFF)
                    Voxel.objects.create(x=x, y=y, z=z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["get"])  # add 1xNx1 tower of voxels
    def tower(self, request):
        random_x = random.randint(-16, 16)
        random_z = random.randint(-16, 16)
        random_y = random.randint(1, 16)
        for x in range(1):
            for y in range(1, random_y):
                for z in range(1):
                    random_color = "%06x" % random.randint(0, 0xFFFFFF)
                    Voxel.objects.create(
                        x=random_x, y=y, z=random_z, color=random_color
                    )
        return Response(status=status.HTTP_201_CREATED)

    @action(
        detail=False, methods=["get"]
    )  # build a hollow cube of voxels from walls of 32 square
    def cube(self, request):
        for x in range(-32, 32):
            for y in range(-32, 32):
                for z in range(-32, 32):
                    if (
                        x == -32
                        or x == 31
                        or y == -32
                        or y == 31
                        or z == -32
                        or z == 31
                    ):
                        random_color = "%06x" % random.randint(0, 0xFFFFFF)
                        # Voxel.objects.create(x=x, y=y, z=z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)


class ClaimViewSet(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer

    def perform_create(self, serializer):
        serializer.save(session_key=self.request.session.session_key)

    @action(detail=False, methods=["get"])
    def clear_all(self, request):
        Claim.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
