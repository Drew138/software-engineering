from rest_framework import routers
from django.urls import path
from .views import (ClaseView, AnuncioView, EntregaView, PreguntaView, RespuestaView)
from . import views

router = routers.DefaultRouter()
router.register('clase', ClaseView, 'city')
router.register('entrega', EntregaView, 'city')
router.register('anuncio', AnuncioView, 'city')
router.register('pregunta', PreguntaView, 'city')
router.register('respuesta', RespuestaView, 'city')


urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("register", views.register, name="register"),
]

urlpatterns += router.urls