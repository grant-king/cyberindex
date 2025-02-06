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
    ClaimReadSerializer,
    PlacementPromiseSerializer,
    BuilderSerializer,
)


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 30000
    page_size_query_param = "page_size"
    max_page_size = 60000


class HeftyResultsSetPagination(PageNumberPagination):
    page_size = 600
    page_size_query_param = "page_size"
    max_page_size = 3000


class VoxelViewSet(viewsets.ModelViewSet):
    queryset = Voxel.objects.all()
    serializer_class = VoxelSerializer
    pagination_class = LargeResultsSetPagination

    def get_queryset(self):
        # complex filter with q
        # filter by objects with claim = None
        # or with claim and is_holding = False

        return Voxel.objects.filter(Q(claim__isnull=True) | Q(claim__is_holding=False)).distinct()

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

    @action(detail=False, methods=["get"])  # build a hollow cube of voxels
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

    @action(detail=False, methods=["get"])  # build a hollow sphere of voxels
    def sphere(self, request):
        for x in range(-8, 8):
            for y in range(-8, 8):
                for z in range(-8, 8):
                    if x**2 + y**2 + z**2 < 8**2:
                        # make hollow
                        if x**2 + y**2 + z**2 > 6**2:
                            random_color = "%06x" % random.randint(0, 0xFFFFFF)
                            # Voxel.objects.create(x=x, y=y, z=z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["get"])  # get narest 256 voxels to a point
    def nearest(self, request):
        x = int(request.query_params.get("x", 0))
        y = int(request.query_params.get("y", 0))
        z = int(request.query_params.get("z", 0))
        voxel_coord_list = []
        # build list of coords for nearest 256 voxels
        for x_friend in range(x - 8, x + 8):
            for y_friend in range(y - 8, y + 8):
                for z_friend in range(z - 8, z + 8):
                    voxel_coord_list.append((x_friend, y_friend, z_friend))
        voxels = Voxel.objects.filter(
            x__in=[x for x, y, z in voxel_coord_list],
            y__in=[y for x, y, z in voxel_coord_list],
            z__in=[z for x, y, z in voxel_coord_list],
        )
        serializer = VoxelSerializer(voxels, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"]) # get NxN plane of voxels from an origin a slice plane xy, yz, zx
    def slice(self, request):
        x = int(request.query_params.get("x", 0))
        y = int(request.query_params.get("y", 0))
        z = int(request.query_params.get("z", 0))
        plane = request.query_params.get("plane", "xy")
        square_size = int(request.query_params.get("size", 8))
        unclaimed_query = Q(claim__isnull=True)
        holding_query = Q(claim__is_holding=False)

        if plane == "xy":
            x_query = Q(x__in=range(x, x + square_size))
            y_query = Q(y__in=range(y, y + square_size))
            voxels = Voxel.objects.filter(
                x_query & y_query & (unclaimed_query | holding_query),
                z=z,
            )

        elif plane == "yz":
            y_query = Q(y__in=range(y, y + square_size))
            z_query = Q(z__in=range(z, z + square_size))
            voxels = Voxel.objects.filter(
                y_query & z_query & (unclaimed_query | holding_query),
                x=x,
            )
            

        elif plane == "zx":
            z_query = Q(z__in=range(z, z + square_size))
            x_query = Q(x__in=range(x, x + square_size))
            voxels = Voxel.objects.filter(
                z_query & x_query & (unclaimed_query | holding_query),
                y=y,
            )

        serializer = VoxelSerializer(voxels, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"])  # delete all voxels that do not have a color
    def clear_uncolored(self, request):
        Voxel.objects.filter(color="").delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ClaimViewSet(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer

    def perform_create(self, serializer):
        if self.request.session.session_key is None:
            self.request.session.create()
        serializer.save(session_key=self.request.session.session_key)

    def get_queryset(self):
        if self.request.session.session_key is None:
            self.request.session.create()
        session_query = Q(session_key=self.request.session.session_key)
        is_holding_query = Q(is_holding=True)
        return super().get_queryset().filter(session_query & is_holding_query)

    @action(detail=False, methods=["get"])
    def clear_all(self, request):
        Claim.objects.filter(session_key=self.request.session.session_key).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=["get"], pagination_class=HeftyResultsSetPagination)
    def my_claims(self, request):
        claims = self.get_queryset()
        page = self.paginate_queryset(claims)
        if page is not None:
            serializer = ClaimReadSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = ClaimReadSerializer(claims, many=True)
        return Response(serializer.data)


class BuilderViewSet(viewsets.ModelViewSet):
    queryset = Builder.objects.all()
    serializer_class = BuilderSerializer

    def perform_create(self, serializer):
        serializer.save(session_key=self.request.session.session_key)

    @action(detail=False, methods=["get", "put"])
    def my_builder(self, request):
        if request.method == "GET":
            builder, created = Builder.objects.get_or_create(
                    session_key=self.request.session.session_key)
            serializer = BuilderSerializer(builder, many=False)
            return Response(serializer.data)
        elif request.method == "PUT":
            builder = Builder.objects.get(session_key=self.request.session.session_key)
            serializer = BuilderSerializer(builder, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PlacementPromiseViewSet(viewsets.ModelViewSet):
    queryset = PlacementPromise.objects.all()
    serializer_class = PlacementPromiseSerializer

    def perform_create(self, serializer):
        serializer.save(session_key=self.request.session.session_key)

    def get_queryset(self):
        return (
            super().get_queryset().filter(session_key=self.request.session.session_key)
        )
