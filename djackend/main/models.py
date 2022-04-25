from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils.timezone import now

class Clase(models.Model):
    nombre = models.CharField(max_length=255)
    
    def __str__(self):
        return f"Clase: {self.nombre}"

# class User(AbstractBaseUser):
#     class Roles(models.TextChoices): 
#         Estudiante: 'Estudiante'
#         Profesor: 'Profesor'
        
#     google_id = models.CharField()
#     rol = models.CharField(max_length=255, choices=Roles.choices, default=Roles.Estudiante)
#     clases = models.ManyToManyField(Clase)
    
#     def __str__(self):
#         return f"User: {self.first_name}"

#     @property
#     def is_staff(self):
#         return self.rol == 'Profesor'

def today():
    return now().date()

class Anuncio(models.Model):
    titulo = models.CharField(max_length=255)
    cuerpo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=today)
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)
    
    # def __str__(self):
    #     return f"Titulo: {self.titulo} | Creado por: {self.clase.profesor.first_name}"

class Entrega(models.Model):
    titulo = models.CharField(max_length=255)
    cuerpo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=today)
    fecha_entrega = models.DateField(default=today)
    porcentaje = models.IntegerField(default=0,  validators=[MaxValueValidator(100), MinValueValidator(1)])
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)
    
    # def __str__(self):
    #     return f"Titulo: {self.titulo} | Creado por: {self.clase.profesor.first_name}"

class Pregunta(models.Model):
    titulo = models.CharField(max_length=255)
    fecha_creacion = models.DateField(default=today)
    # estudiante = models.ForeignKey('User', on_delete=models.CASCADE)
    clase = models.ForeignKey('Clase', on_delete=models.CASCADE)
    respuesta = models.CharField(max_length=255)
    # def __str__(self):
    #     return f"Titulo: {self.titulo} | Creado por: {self.profesor.first_name}"