from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = "images"


urlpatterns = [
    path('create/', views.image_create, name="create"),
    path('detail/<int:id>/<slug:slug>', views.image_detail, name='detail'),
]

