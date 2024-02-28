from django.urls import path

from . import views

app_name = "todoist"
urlpatterns = [
    path("", views.index, name="index"),
    path("<int:bloco_id>/", views.detalhe, name="detalhe"),
    path("<int:bloco_id>/delete/", views.delete, name="delete")
]
