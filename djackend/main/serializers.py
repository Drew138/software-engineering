from rest_framework import serializers, fields
from .models import (Clase, Anuncio, Entrega, Pregunta, Respuesta)

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

    class Meta:
        model = Pregunta
        fields = '__all__'

class RespuestaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Respuesta
        fields = '__all__'
