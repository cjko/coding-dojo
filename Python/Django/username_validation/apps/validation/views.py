# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages


# Create your views here.
def index(request):
	return render(request, 'validation/index.html')

def validate(request):
	# print request.POST['username']

	if not User.objects.input(request.POST['username']):
		messages.error(request, 'Username is not valid!')
		return redirect('/')

	else:
		user = User.objects.create(name=request.POST['username'])
		messages.success(request, 'The username you entered (' + request.POST['username'] + ') is valid. Thank you!')
		return redirect('/success')

def success(request):
	users = User.objects.all()

	context = {
		'users': users
	}

	return render(request, 'validation/success.html', context)