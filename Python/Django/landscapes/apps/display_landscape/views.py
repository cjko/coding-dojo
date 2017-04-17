# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
	return render(request, 'display_landscape/index.html')

def display(request, value):
	# print int(value)

	if int(value) >= 1 and int(value) <= 10:
		landscape = 'Snow'
		filename = 'snow.jpg'

	elif int(value) >= 11 and int(value) <= 20:
		landscape = 'Desert'
		filename = 'desert.jpg'

	elif int(value) >= 21 and int(value) <= 30:
		landscape = 'Forest'
		filename = 'forest.jpg'

	elif int(value) >= 31 and int(value) <= 40:
		landscape = 'Vineyard'
		filename = 'vineyard.jpg'

	elif int(value) >= 41 and int(value) <= 50:
		landscape = 'Tropical'
		filename = 'tropical.jpg'

	else:
		messages.add_message(request, 50, 'Invalid number.')
		return redirect('/')

	context = {
		'landscape': landscape,
		'filename': filename
	}

	return render(request, 'display_landscape/landscape.html', context)