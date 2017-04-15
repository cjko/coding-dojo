# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random, datetime

# Create your views here.
def index(request):

	if 'gold' not in request.session:
		request.session['gold'] = 0

	if 'activity' not in request.session:
		request.session['activity'] = []

	context = {
		'gold': request.session['gold'],
		'activity': request.session['activity']
	}

	return render(request, 'gold/index.html', context)

def process(request):

	if request.POST['action'] == 'farm':
		payout = random.randint(10,20)
		message = 'Earned ' + str(payout) + ' golds from the farm! (' + str(datetime.datetime.now()) + ')'

	elif request.POST['action'] == 'cave':
		payout = random.randint(5,10)
		message = 'Earned ' + str(payout) + ' golds from the cave! (' + str(datetime.datetime.now()) + ')'

	elif request.POST['action'] == 'house':
		payout = random.randint(2,5)
		message = 'Earned ' + str(payout) + ' golds from the house! (' + str(datetime.datetime.now()) + ')'

	elif request.POST['action'] == 'casino':
		payout = random.randint(-50,50)
		if payout > 0:
			message = 'Entered a casino and won ' + str(payout)+' golds... Nice! (' + str(datetime.datetime.now()) + ')'
		else:
			message = 'Entered a casino and lost ' + str(payout) + ' golds... Ouch.. (' + str(datetime.datetime.now()) + ')'

	if payout > 0:
		color = 'green'
	else:
		color = 'red'

	request.session['gold'] += payout
	request.session['activity'].insert(0, (message.encode('ascii'), color))

	return redirect('/')

def reset(request):
	request.session.clear()
	return redirect('/')