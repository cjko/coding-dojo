# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Books(models.Model):
	title = models.CharField(max_length=255)
	author = models.CharField(max_length=255)
	published_date = models.DateTimeField()
	category = models.CharField(max_length=255)
	in_print = models.BooleanField(default=True)