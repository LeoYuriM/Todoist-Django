from django.http import HttpResponse
from django.template import loader
from .models import Bloco


def index(request):
    bloco_list = Bloco.objects.all()
    template = loader.get_template("todoist/index.html")
    context = {
        "bloco_list" : bloco_list,
    }
    return HttpResponse(template.render(context, request))


def detalhe(request, bloco_id):
    return HttpResponse("Detalhes do Bloco %s." % bloco_id)
