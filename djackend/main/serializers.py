from rest_framework import serializers
from .models import (Clase, Anuncio, Entrega, Pregunta)

class ClaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clase
        fields = '__all__'

class AnuncioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Anuncio
        fields = '__all__'

class EntregaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Entrega
        fields = '__all__'

class PreguntaSerializer(serializers.ModelSerializer):

    respuesta = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Pregunta
        fields = '__all__'

