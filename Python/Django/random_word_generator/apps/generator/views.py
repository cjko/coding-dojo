# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import md5
import random

# Create your views here.
def index(request):
	if 'attempt' not in request.session:
		request.session['attempt'] = 0

	request.session['attempt'] += 1

	randomString = str(random.getrandbits(128))

	context = {
		'random_word': md5.new(randomString).hexdigest()
	}
	return render(request, 'generator/index.html', context)
