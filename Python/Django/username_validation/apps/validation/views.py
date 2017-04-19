# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
	return render(request, 'validation/index.html')

def validate(request):

	success = True

	if len(request.POST['username']) < 8 or len(request.POST['username']) > 16:
		messages.error(request, 'Username is not valid!')
		success = False

	if success:
		messages.success(request, 'The username you entered (' + request.POST['username'] + ') is valid. Thank you!')
		user = User.objects.create(name=request.POST['username'])
		return redirect('/success')

	return redirect('/')

def success(request):
	users = User.objects.all()

	context = {
		'users': users
	}

	return render(request, 'validation/success.html', context)