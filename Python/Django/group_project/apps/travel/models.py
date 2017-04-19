# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Tourist (models.Model):
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	memberID = models.IntegerField()
	destination_id = models.ForeignKey('Destination')

class Destination (models.Model):
	country = models.CharField(max_length=100)
	city = models.CharField(max_length=100)
	description = models.TextField(max_length=1000)
