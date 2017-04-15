# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
	return render(request, 'new_app/index.html')

def show(request):
	return render(request, 'new_app/users.html')

# Create your views here.
