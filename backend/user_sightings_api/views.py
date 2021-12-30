from django.shortcuts import render
from .models import Sighting
from .serializers import SightingSerializer
from rest_framework import viewsets

# Create your views here.


class SightingViewSet(viewsets.ModelViewSet):
    serializer_class = SightingSerializer
    queryset = Sighting.objects.all()
