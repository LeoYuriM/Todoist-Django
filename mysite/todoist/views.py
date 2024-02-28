from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Bloco
from django.shortcuts import get_object_or_404
from django.urls import reverse


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


def detalhe(request, bloco_id):
    return HttpResponse("Detalhes do Bloco %s." % bloco_id)


def delete(request, bloco_id):
    bloco = get_object_or_404(Bloco, pk=bloco_id)
    if len(__retorna_blocos()) > 1:
        bloco.delete()
    return HttpResponseRedirect(reverse("todoist:index"))


def __retorna_blocos():
    return Bloco.objects.all()
