# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import datetime

# Create your views here.
def index(request):
	context = {
		'date': datetime.datetime.now()
	}
	return render(request, 'display_time/index.html', context)