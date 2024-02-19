from django.http import HttpResponse
from django.template import loader
from .models import Bloco

def index(request):
    lista_bloco = Bloco.objects.all()
    template = loader.get_template("todoist/index.html")
    context = {
        "lista_bloco": lista_bloco,
    }
    return HttpResponse(template.render(context, request))

def detalhe(request, bloco_id):
    return HttpResponse("Detalhes do Bloco %s." % bloco_id)
