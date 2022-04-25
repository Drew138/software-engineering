from .models import (Clase, Anuncio, Entrega, Pregunta)
from .serializers import (ClaseSerializer, AnuncioSerializer, EntregaSerializer, PreguntaSerializer)
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from django.contrib import admin, messages
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate, logout

def homepage(request):
    return render(request, "home.html")

def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f"New account created: {username}")
            login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        else:
            messages.error(request,"Account creation failed")

        return redirect("main:homepage")

    form = UserCreationForm()
    return render(request,"register.html", {"form": form})


class ClaseView(viewsets.ModelViewSet):
    serializer_class = ClaseSerializer
    filter_backends = [DjangoFilterBackend]

    filterset_fields = '__all__'
    def get_queryset(self):
        return Clase.objects.all()

class AnuncioView(viewsets.ModelViewSet):
    serializer_class = AnuncioSerializer
    filter_backends = [DjangoFilterBackend]

    filterset_fields = '__all__'

    def get_queryset(self):
        return Anuncio.objects.all()

class EntregaView(viewsets.ModelViewSet):
    serializer_class = EntregaSerializer
    filter_backends = [DjangoFilterBackend]

    filterset_fields = '__all__'
    def get_queryset(self):
        queryset = Entrega.objects.all()
        return queryset

class PreguntaView(viewsets.ModelViewSet):
    serializer_class = PreguntaSerializer
    filter_backends = [DjangoFilterBackend]

    filterset_fields = '__all__'
    def get_queryset(self):
        queryset = Pregunta.objects.all()
        return queryset