from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Bottle

@require_http_methods(["GET"])
def bottle_list(request):
    bottles = Bottle.objects.all().values('id', 'name', 'price', 'image')
    bottle_list = list(bottles)
    for bottle in bottle_list:
        if bottle['image']:
            bottle['image'] = request.build_absolute_uri(bottle['image'])
    return JsonResponse(bottle_list, safe=False)
