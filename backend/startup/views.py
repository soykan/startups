from rest_framework import viewsets
from rest_framework import permissions
from startup.serializers import StartupDetailSerializer, StartupTagSerializer
from startup.models import StartupDetail, StartupTag


class StartupDetailViewSet(viewsets.ModelViewSet):
    queryset = StartupDetail.objects.all()
    serializer_class = StartupDetailSerializer
    permission_classes = [permissions.IsAuthenticated]


class StartupTagViewSet(viewsets.ModelViewSet):
    queryset = StartupTag.objects.all()
    serializer_class = StartupTagSerializer
    permission_classes = [permissions.IsAuthenticated]