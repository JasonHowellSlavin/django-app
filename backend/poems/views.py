from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.paginator import Paginator
from rest_framework import viewsets
from .serializers import PoemSerializer
from .models import Poem
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the poems index.")

class PoemView(viewsets.ModelViewSet):
    serializer_class = PoemSerializer
    queryset = Poem.objects.all()

@csrf_exempt
def update_many(request):
    body = json.loads(request.body)
    
    try:
        for entry in body:
            new_poem = Poem(author_title=entry['author_title'], poem_content=entry['poem_content'])
            new_poem.save()
        return JsonResponse({"status": "200", "message": "Success" })
    except (KeyError):
        return JsonResponse({"status": "500", "message": KeyError})

@csrf_exempt
def search(request):
    body = json.loads(request.body)
    search_value = body['search_value']

    searched = Poem.objects.filter(author_title__contains=search_value)
    p = Paginator(searched, 5)

    data = []
    for page_num in range(1, p.num_pages + 1):
        data.append({'page_num': page_num, 'poems': list(p.page(page_num).object_list.values())})

    paginatedResults = list(data)

    return JsonResponse({"status": "200", "message": "you hit search", "searched": paginatedResults})


