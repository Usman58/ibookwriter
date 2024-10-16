# api/serializers.py

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Project
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=True)
    
    class Meta:
        model = User
        fields = ('username', 'password')
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user




class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'document', 'created_at')
