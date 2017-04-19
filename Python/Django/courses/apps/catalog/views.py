# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Course

# Create your views here.
def index(request):

	courses = Course.objects.all()

	context = {
		'courses': courses
	}

	return render(request, 'catalog/index.html', context)

def confirm(request, id):

	course = Course.objects.get(id=id)

	context = {
		'name': course.name,
		'description': course.description,
		'id': course.id
	}
	
	return render(request,'catalog/confirm.html', context)

def delete(request, id):
	Course.objects.get(id=id).delete()
	return redirect('/')

def create(request):
	Course.objects.create(name=request.POST['name'],description=request.POST['description'])

	return redirect('/')
