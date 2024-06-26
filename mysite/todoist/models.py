import datetime
from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone


class Bloco(models.Model):
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        null=True
    )
    bloco_titulo = models.CharField(max_length=200)
    bloco_texto = models.CharField(max_length=500)
    data_pub = models.DateTimeField("data de criação")

    def __str__(self):
        return self.bloco_titulo

    def criado_recentemente(self):
        return self.data_pub >= timezone.now() - datetime.timedelta(days=1)
