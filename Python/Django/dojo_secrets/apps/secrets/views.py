# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from models import User, Secret
from django.db.models import Count

# Create your views here.
def index(request):
	return render(request, 'secrets/index.html')

def register(request):

	postData = {
		'first_name': request.POST['first_name'],
		'last_name': request.POST['last_name'],
		'email': request.POST['email'],
		'password': request.POST['password'],
		'confirm_pw': request.POST['confirm_pw'],
	}


	# if no errors
	if not User.objects.register(postData):
		# add user to database
		new_user_id = User.objects.create_user(postData)
		request.session['user_id'] = new_user_id
		# messages.success(request, 'Successfully registered!')

		return redirect('/secrets')

	for error in User.objects.register(postData):
		messages.error(request, error)

	return redirect('/')

def login(request):

	postData = {
		'email': request.POST['email'],
		'password': request.POST['password'],
	}

	#if no errors
	if not User.objects.login(postData):
		# find id matching email
		user_id = User.objects.get(email=postData['email']).id
		request.session['user_id'] = user_id
		# messages.success(request, 'Successfully logged in!')
		return redirect('/secrets')

	for error in User.objects.login(postData):
		messages.error(request, error)

	return redirect('/')

def secrets(request):

	if 'user_id' in request.session:

		first_name = User.objects.get(id=request.session['user_id']).first_name

		secrets = Secret.objects.all().order_by('-created_at').annotate(num_likes=Count('likes'))

		liked_secrets = Secret.objects.filter(likes__id=request.session['user_id'])
		arr = []
		for liked_secret in liked_secrets:
			arr.append(liked_secret.id)
		# print arr

		context = {
			'first_name': first_name,
			'message': messages,
			'secrets': secrets,
			'arr': arr,
		}

		return render(request,'secrets/secrets.html', context)

	messages.error(request, 'You are not logged in!')

	return redirect('/')

def share(request):
	postData = {
		'secret': request.POST['secret'],
		'user_id': request.session['user_id']
	}

	Secret.objects.add_secret(postData)

	return redirect('/secrets')

def like(request, secret_id):
	postData = {
		'secret_id': secret_id,
		'user_id': request.session['user_id']
	}

	Secret.objects.like(postData)

	return redirect('/secrets')

def unlike(request, secret_id):
	postData = {
		'secret_id': secret_id,
		'user_id': request.session['user_id']
	}

	Secret.objects.unlike(postData)

	return redirect('/secrets')

def delete(request, secret_id):
	if request.session['user_id'] == Secret.objects.get(id=secret_id).user.id:
		Secret.objects.delete_secret(secret_id)
	return redirect('/secrets')


def logout(request):

	request.session.clear()
	return redirect('/')