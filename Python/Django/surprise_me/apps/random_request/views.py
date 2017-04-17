# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages

import random

VALUES = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

# Create your views here.
def index(request):
	return render(request, 'random_request/index.html')

def generate(request):

	if int(request.POST['user_number']) > 9 or int(request.POST['user_number']) < 1:

		messages.add_message(request, 50, 'Invalid number')

		return redirect('/')

	else:

		request.session['items'] = []

		random.shuffle(VALUES)

		for n in range (0, int(request.POST['user_number'])):
			request.session['items'].append(VALUES[n])

		return redirect('/results')

def results(request):

	context = {
		'items': request.session['items']
	}

	return render(request, 'random_request/results.html', context)
