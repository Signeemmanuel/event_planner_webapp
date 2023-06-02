from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.auth import AuthToken
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from .models import *
from .serializers import *


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    serializer = AuthTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    _, token = AuthToken.objects.create(user=user)
    return Response({
        'user_info': {
            'id': user.id,
            'username': user.username,
            'email': user.email
        },
        'token': token
    })
    
    
@api_view(['GET'])
def get_user_data(request):
    user = request.user
    # print(request)
    # print(user)
    if user.is_authenticated:
        return Response({
            'user_info': {
                'id': user.id,
                'username': user.username,
                'email': user.email
            },
        })
    return Response({'error': "not authenticated"}, status='400')


@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    password = make_password(serializer.validated_data['password'])
    user = serializer.save(password=password)
    _, token = AuthToken.objects.create(user)
    return Response({
        'user_info': {
            'id': user.id,
            'username': user.username,
            'email': user.email
            },
        'token': token
        })

