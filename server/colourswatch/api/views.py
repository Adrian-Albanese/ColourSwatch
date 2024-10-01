from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random

@api_view(['GET'])
def fetchcolour(request):
    colourspaces = ['RGB', 'HSL']
    index = random.randint(0,len(colourspaces) -1)

    match colourspaces[index]:
        case 'RGB': colour = {'type': 'RGB', 'r': random.randint(0,255), 'g': random.randint(0,255), 'b': random.randint(0,255)}
        case 'HSL': colour = {'type': 'HSL', 'hue': random.randint(0,360), 'sat': random.randint(0,100), 'light': random.randint(0,100)} 
    return Response(colour)


