# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import messages

# Create your models here.
class UserManager(models.Manager):

	def input(self, postData):

		success = True

		if len(postData) < 8 or len(postData) > 16:
			success = False

		return success


class User (models.Model):
	name = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

	objects = UserManager()



