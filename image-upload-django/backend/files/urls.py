from django.urls import path
from .views import PhotoUpload

urlpatterns = [
    path('upload/', PhotoUpload.as_view(), name='photo-upload')
]