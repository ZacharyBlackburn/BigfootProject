from django.db import models

# Create your models here.


class Sighting(models.Model):
    title = models.CharField(max_length=250)
    year = models.CharField(max_length=4)
    month = models.CharField(max_length=15)
    description = models.CharField(max_length=350)

    def __str__(self):
        return self.title
