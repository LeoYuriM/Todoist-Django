from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the todoist index.")

def detalhe(request, bloco_id):
    return HttpResponse("Detalhes do Bloco %s." % bloco_id)
