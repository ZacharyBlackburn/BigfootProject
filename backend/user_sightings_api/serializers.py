from rest_framework import serializers
from user_sightings_api.models import Sighting


class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = '__all__'
