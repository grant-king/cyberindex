from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Dancer, DancePath
from .serializers import DancerSerializer, DancePathSerializer
from rest_framework.decorators import action

class DancerViewSet(viewsets.ModelViewSet):
    """API endpoint that allows dancers to be viewed or edited."""
    
    queryset = Dancer.objects.all()
    serializer_class = DancerSerializer

    def perform_create(self, serializer):
        if not self.request.session.session_key:
            self.request.session.create()
        session_id = self.request.session.session_key
        serializer.save(session_id=session_id)

        return super().perform_create(serializer)
    
    def perform_destroy(self, instance):
        if instance.session_id == self.request.session.session_key:
            return super().perform_destroy(instance)
        else:
            pass

    def perform_update(self, serializer):
        if serializer.instance.session_id == self.request.session.session_key:
            return super().perform_update(serializer)
        else:
            pass
        
    @action(detail=False, methods=['get'])
    def my_dancers(self, request):
        session_id = request.session.session_key
        dancers = Dancer.objects.filter(session_id=session_id)
        serializer = DancerSerializer(dancers, many=True, context={'request': request})
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def paths(self, request, pk=None):
        dancer = self.get_object()
        serializer = DancePathSerializer(dancer.paths.all(), many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def add_path(self, request, pk=None):
        dancer = self.get_object()
        serializer = DancePathSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(dancer=dancer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  