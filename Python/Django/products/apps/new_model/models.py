# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Product(models.Model):

	name = models.CharField(max_length=255)
	description = models.TextField(max_length=1000)
	weight = models.CharField(max_length=255)
	cost = models.CharField(max_length=255)
	category = models.CharField(max_length=255)

