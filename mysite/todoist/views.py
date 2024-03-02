from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Bloco
from django.shortcuts import get_object_or_404
from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import logout


def create_account(request):
    if request.method != 'POST':
        form = UserCreationForm()
    else:
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("accounts/login/")

    context = {'form': form}

    return render(request, 'todoist/create-account.html', context)


def index(request):
    # pega todos os blocos
    bloco_list = __retorna_blocos()
    # carrega o template index
    template = loader.get_template("todoist/index.html")
    # adiciona a lista dos blocos em uma lista de contexto
    context = {
        "bloco_list": bloco_list,
    }
    # retorna a resposta HTTP renderizando o template com a lista de blocos
    return HttpResponse(template.render(context, request))


def create(request):
    titulo = request.POST.get("titulo", "")
    texto = request.POST.get("texto", "")
    data = request.POST.get("data", "")
    bloco = Bloco(bloco_titulo=titulo, bloco_texto=texto, data_pub=data)
    bloco.save()
    return HttpResponseRedirect(reverse("todoist:index"))


def update(request, bloco_id):
    bloco = get_object_or_404(Bloco, pk=bloco_id)
    bloco.bloco_titulo = request.POST.get("titulo", "")
    bloco.bloco_texto = request.POST.get("texto", "")
    bloco.data_pub = request.POST.get("data", "")
    bloco.save()
    return HttpResponseRedirect(reverse("todoist:index"))

def delete(request, bloco_id):
    bloco = get_object_or_404(Bloco, pk=bloco_id)
    if len(__retorna_blocos()) > 1:
        bloco.delete()
    return HttpResponseRedirect(reverse("todoist:index"))


def login(request):
    return render(request, "todoist/login.html")


def encerrar_sessao(request):
    logout(request)
    return HttpResponseRedirect(reverse("todoist:index"))


# def create_account(request):
#    return render(request, "todoist/create-account.html")


def __retorna_blocos():
    return Bloco.objects.all()
