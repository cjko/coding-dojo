# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
	print 'hello world'
	return render(request, 'print_hello_world/index.html')