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
        session_key = self.request.session.session_key
        serializer.save(session_key=session_key)

        return super().perform_create(serializer)
    
    def perform_destroy(self, instance):
        if instance.session_key == self.request.session.session_key:
            return super().perform_destroy(instance)
        else:
            pass

    def perform_update(self, serializer):
        if serializer.instance.session_key == self.request.session.session_key:
            return super().perform_update(serializer)
        else:
            pass
        
    @action(detail=False, methods=['get'])
    def my_dancers(self, request):
        session_key = request.session.session_key
        dancers = Dancer.objects.filter(session_key=session_key)
        serializer = DancerSerializer(dancers, many=True, context={'request': request})
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def paths(self, request, pk=None):
        dancer = self.get_object()
        serializer = DancePathSerializer(dancer.paths.all(), many=True, context={'request': request})
        return Response(serializer.data)


class DancePathViewSet(viewsets.ModelViewSet):
    """API endpoint that allows dance paths to be viewed or edited."""

    queryset = DancePath.objects.all()
    serializer_class = DancePathSerializer

    def perform_create(self, serializer):
        #look up the dancer by url in the serializer data
        dancer = Dancer.objects.get(pk=serializer.validated_data['dancer'].id)
        if dancer.session_key == self.request.session.session_key:
            return super().perform_create(serializer)
        else:
            pass
    
    def perform_destroy(self, instance):
        if instance.dancer.session_key == self.request.session.session_key:
            return super().perform_destroy(instance)
        else:
            pass

    def perform_update(self, serializer):
        dancer = Dancer.objects.get(pk=serializer.validated_data['dancer'].id)
        if dancer.session_key == self.request.session.session_key:
            return super().perform_update(serializer)
        else:
            pass
    
    @action(detail=False, methods=['get'])
    def my_paths(self, request):
        session_key = request.session.session_key
        paths = DancePath.objects.filter(dancer__session_key=session_key)
        serializer = DancePathSerializer(paths, many=True, context={'request': request})
        return Response(serializer.data)
  