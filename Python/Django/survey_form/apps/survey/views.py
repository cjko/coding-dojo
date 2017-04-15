# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):

	return render(request, 'survey/index.html')

def result(request):

	context = {
		'name': request.session['name'],
		'location': request.session['location'],
		'language': request.session['language'],
		'comment': request.session['comment'],
		'submitCount': request.session['submitCount']
	}

	return render(request, 'survey/result.html', context)

def process(request):

	if 'submitCount' not in request.session:
		request.session['submitCount'] = 0

	request.session['submitCount'] += 1

	request.session['name'] = request.POST['name']
	request.session['location'] = request.POST['location']
	request.session['language'] = request.POST['language']
	request.session['comment'] = request.POST['comment']

	return redirect('/result')