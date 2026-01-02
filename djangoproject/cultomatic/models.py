from django.db import models
from django.contrib.auth.models import User


class Creator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


# model for storing spritesheet animation images
class Animation(models.Model):
    creator = models.ForeignKey(Creator, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="cultomatic/animations/")
    created_at = models.DateTimeField(auto_now_add=True)
    info = models.JSONField(default=dict) #image and frame size, palette, etc

