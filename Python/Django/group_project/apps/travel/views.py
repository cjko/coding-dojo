# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Tourist, Destination

# Create your views here.
def index(request):

	tourists = Tourist.objects.all()
	destinations = Destination.objects.all()

	context = {
		'tourists': tourists,
		'destinations': destinations
	}

	return render(request, 'travel/index.html', context)