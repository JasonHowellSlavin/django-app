from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from .serializers import PoemSerializer
from .models import Poem
from django.views.decorators.csrf import csrf_exempt
import logging

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class PoemView(viewsets.ModelViewSet):
    serializer_class = PoemSerializer
    queryset = Poem.objects.all()

@csrf_exempt
def update_many(request):
    serializer_class = PoemSerializer
    print('Hello 2', request.body)
    
    try:
        Poem.objects.bulk_create(request.body)
        return JsonResponse({"status": "200", "message": "Success"})
    except (KeyError):
        return JsonResponse({"status": "500", "message": KeyError})

