from django.urls import path

from . import views

app_name = "todoist"
urlpatterns = [
    path("", views.index, name="index"),
    path("<int:bloco_id>/delete/", views.delete, name="delete"),
    path("<int:bloco_id>/update/", views.update, name="update"),
    path("create", views.create, name="create"),
    path("login", views.login, name="login"),
    path("create-account", views.create_account, name="create-account")
]
