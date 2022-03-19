from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime

class Clase(models.Model):
    nombre = models.CharField(max_length=255)
    
    def __str__(self):
        return f"Clase: {self.nombre}"

class User(AbstractBaseUser):
    class Roles: 
        Estudiante: 'Estudiante'
        Profesor: 'Profesor'
        
    google_id = models.CharField()
    rol = models.ENUM(Roles, default=Roles.Estudiante)
    clases = models.ManyToManyField(Clase)
    
    def __str__(self):
        return f"User: {self.first_name}"

    @property
    def is_staff(self):
        return self.rol == 'Profesor'

class Anuncio(models.Model):
    titulo = models.CharField(max_length=255)
    cuerpo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=datetime.date.today)
    profesor = models.ForeignKey('User', on_delete=models.CASCADE)
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"Titulo: {self.titulo} | Creado por: {self.profesor.first_name}"

class Entrega(models.Model):
    titulo = models.CharField(max_length=255)
    cuerpo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=datetime.date.today)
    fecha_entrega = models.DateField(default=datetime.date.today() + datetime.timedelta(days=1))
    porcentaje = models.IntegerField(default=0,  validators=[MaxValueValidator(100), MinValueValidator(1)])
    profesor = models.ForeignKey('User', on_delete=models.CASCADE)
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)
    

class Pregunta(models.Model):
    titulo = models.CharField(max_length=255)
    cuerpo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=datetime.date.today)
    respondida = models.BooleanField(default=False)
    estudiante = models.ForeignKey('User', on_delete=models.CASCADE)
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)

class Respuesta(models.Model):
    cuerpo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=datetime.date.today)
    estudiante = models.ForeignKey('User', on_delete=models.CASCADE)
    pregunta = models.ForeignKey('Pregunta', on_delete=models.CASCADE)
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)







