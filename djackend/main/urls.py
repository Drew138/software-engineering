from rest_framework import routers
from django.urls import path
from .views import (ClaseView, AnuncioView, EntregaView, PreguntaView, UserView)
from . import views

router = routers.DefaultRouter()
router.register('clase', ClaseView, 'clase') # ?
router.register('entrega', EntregaView, 'entrega')
router.register('anuncio', AnuncioView, 'anuncio')
router.register('pregunta', PreguntaView, 'pregunta')
router.register('user', UserView, 'user')


# urlpatterns = [
#     path("", views.homepage, name="homepage"),
#     path("register", views.register, name="register"),
# ]

urlpatterns = router.urls