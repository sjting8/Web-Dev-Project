from rest_framework import serializers
from api.models.demo import Demo

class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Demo
        fields = [ 'id', 'name', 'age']