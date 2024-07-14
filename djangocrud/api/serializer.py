from django.contrib.auth.models import User, Group
from rest_framework import fields, serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        #fields = ('id', 'title', 'desc', 'year')
        fields = '__all__'
