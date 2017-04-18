# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Book

# Create your views here.
def index(request):
	library = Book.objects.all()
	context = {
		'library': library
	}
	return render(request, 'library/index.html', context)

def create(request):
	Book.objects.create(title=request.POST['title'], author=request.POST['author'], category=request.POST['category'])

	return redirect('/')