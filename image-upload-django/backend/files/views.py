from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Photo
from .serializers import PhotoSerializer

# Create your views here.

class PhotoUpload(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = PhotoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=400)
