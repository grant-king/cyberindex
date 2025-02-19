from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
import random
from rest_framework.pagination import PageNumberPagination
from django.db.models import OuterRef
from django.utils.dateparse import parse_datetime

# admin auth for voxel actions
from rest_framework.permissions import IsAuthenticated, IsAdminUser

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
        return Voxel.objects.filter(claim_pending=False)

    @action(
        detail=False, methods=["get"], permission_classes=[IsAdminUser]
    )  # add 8x1xN plane of voxels
    def plane(self, request):
        for x in range(-16, 16):
            for y in range(0, 1):
                for z in range(-16, 16):
                    random_color = "%06x" % random.randint(0, 0xFFFFFF)
                    Voxel.objects.create(x=x, y=y, z=z, color=random_color)
        return Response(status=status.HTTP_201_CREATED)

    @action(
        detail=False, methods=["get"], permission_classes=[IsAdminUser]
    )  # add 1xNx1 tower of voxels
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
        detail=False, methods=["get"], permission_classes=[IsAdminUser]
    )  # build a hollow cube of voxels
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

    @action(
        detail=False, methods=["get"], permission_classes=[IsAdminUser]
    )  # build a hollow sphere of voxels
    def sphere(self, request):
        for x in range(-8, 8):
            for y in range(-8, 8):
                for z in range(-8, 8):
                    if x**2 + y**2 + z**2 < 8**2:
                        # make hollow
                        if x**2 + y**2 + z**2 > 6**2:
                            random_color = "%06x" % random.randint(0, 0xFFFFFF)
                            Voxel.objects.create(x=x, y=y, z=z, color=random_color)
                            # Voxel.objects.create(x=x, y=y, z=z, color='fdffdf')
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
            claim_pending=False,
        )
        serializer = VoxelSerializer(voxels, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=["get"]) # get voxels updated since query
    def recent(self, request):
        updated_since = request.query_params.get('updated_since')
        if updated_since is not None:
            updated_since = parse_datetime(updated_since)
            voxels = Voxel.objects.filter(updated_at__gt=updated_since, claim_pending=False)
            serializer = VoxelSerializer(voxels, many=True) 
            return Response(serializer.data)
        else:
            # return last 20 updated voxels
            voxels = Voxel.objects.order_by('-updated_at')[:20]
            serializer = VoxelSerializer(voxels, many=True)
            return Response(serializer.data)

    @action(
        detail=False, methods=["get"]
    )  # get NxN plane of voxels from an origin a slice plane xy, yz, zx
    def slice(self, request):
        x = int(request.query_params.get("x", 0))
        y = int(request.query_params.get("y", 0))
        z = int(request.query_params.get("z", 0))
        plane = request.query_params.get("plane", "xy")
        square_size = int(request.query_params.get("size", 8))

        if plane == "xy":
            x_query = Q(x__in=range(x, x + square_size))
            y_query = Q(y__in=range(y, y + square_size))
            voxels = Voxel.objects.filter(
                x_query & y_query,
                z=z,
                claim_pending=False,
            )

        elif plane == "yz":
            y_query = Q(y__in=range(y, y + square_size))
            z_query = Q(z__in=range(z, z + square_size))
            voxels = Voxel.objects.filter(
                y_query & z_query,
                x=x,
                claim_pending=False,
            )

        elif plane == "zx":
            z_query = Q(z__in=range(z, z + square_size))
            x_query = Q(x__in=range(x, x + square_size))
            voxels = Voxel.objects.filter(
                z_query & x_query,
                y=y,
                claim_pending=False,
            )

        serializer = VoxelSerializer(voxels, many=True)
        return Response(serializer.data)

    @action(
        detail=False, methods=["get"], permission_classes=[IsAdminUser]
    )  # delete all voxels that do not have a color
    def clear_uncolored(self, request):
        Voxel.objects.filter(color="").delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # action for moving a voxel's position given key and new x, y, z
    @action(detail=False, methods=["post"])
    def move(self, request):
        # get pk, x, y, z from request form data
        pk = request.data.get("pk")
        x = request.data.get("x")
        y = request.data.get("y")
        z = request.data.get("z")
        # get voxel object from pk
        voxel = Voxel.objects.get(pk=pk)
        # update voxel's x, y, z
        voxel.x = x
        voxel.y = y
        voxel.z = z
        # save voxel
        voxel.save()
        # return voxel and response
        serializer = VoxelSerializer(voxel, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ClaimViewSet(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer

    def perform_create(self, serializer):
        if self.request.session.session_key is None:
            self.request.session.create()
        serializer.save(session_key=self.request.session.session_key)
        _ = serializer.instance.voxel.check_claim_pending
        return super().perform_create(serializer)

    def perform_update(self, serializer):
        # check claim is by this session
        if serializer.instance.session_key != self.request.session.session_key:
            return Response(status=status.HTTP_403_FORBIDDEN)
        serializer.save()
        _ = serializer.instance.voxel.check_claim_pending
        return super().perform_update(serializer)

    def get_queryset(self):
        if self.request.session.session_key is None:
            self.request.session.create()
        session_query = Q(session_key=self.request.session.session_key)
        is_holding_query = Q(is_holding=True)
        return super().get_queryset().filter(session_query & is_holding_query)

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
                session_key=self.request.session.session_key
            )
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
