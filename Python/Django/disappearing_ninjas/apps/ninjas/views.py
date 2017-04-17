# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
	return HttpResponse('No ninjas here.')

def ninjas(request):
	return render(request, 'ninjas/index.html')

def color(request, color):

	if color == 'blue':
		turtle = 'Leonardo'
		filename = 'leonardo.jpg'

	elif color == 'purple':
		turtle = 'Donatello'
		filename = 'donatello.jpg'

	elif color == 'orange':
		turtle = 'Michelangelo'
		filename = 'michelangelo.jpg'

	elif color == 'red':
		turtle = 'Raphael'
		filename = 'raphael.jpg'

	else:
		turtle = 'Not April'
		filename = 'notapril.jpg'


	context = {
		'turtle': turtle,
		'filename': filename
	}

	return render(request, 'ninjas/color.html', context)
