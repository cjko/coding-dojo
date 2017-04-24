# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import bcrypt, re

NAME_REGEX = re.compile(r'^[a-zA-Z.-]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PW_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')

# Create your models here.
class UserManager(models.Manager):
	def register(self, postData):

		errors = []

		if len(postData['first_name']) < 1 or len(postData['last_name']) < 1 or len(postData['email']) < 1 or len(postData['first_name']) < 1:
			errors.append('Missing field.')

		if len(postData['first_name']) < 2 or len(postData['last_name']) < 2:
			errors.append('First name and/or last name cannot be fewer than 2 characters.')

		if len(postData['handle']) > 16:
			errors.append('Username cannot be greater than 16 characters.')

		if not NAME_REGEX.match(postData['first_name']) or not NAME_REGEX.match(postData['last_name']):
			errors.append('First name and/or last name can only contain letters.')

		if not EMAIL_REGEX.match(postData['email']):
			errors.append('Email is invalid.')

		if not PW_REGEX.match(postData['password']):
			errors.append('Password is invalid. Cannot be fewer than 8 characters.')

		if postData['password'] != postData['confirm_pw']:
			errors.append('Passwords do not match.')

		# search for email in database
		if User.objects.filter(email=postData['email']):
			errors.append('Email already exists.')

		if User.objects.filter(handle=postData['handle']):
			errors.append('Username already exists.')

		return errors

	def create_user(self, postData):
		hashed_pw = bcrypt.hashpw(postData['password'].encode('utf-8'), bcrypt.gensalt())

		new_user = User.objects.create(first_name=postData['first_name'], last_name=postData['last_name'], email=postData['email'], hashed_pw=hashed_pw)
		return new_user.id

	def login(self, postData):

		errors = []

		if not User.objects.filter(email=postData['email']):
			errors.append('Username and/or password are invalid.')
		else:
			if bcrypt.hashpw(postData['password'].encode('utf-8'), User.objects.get(email=postData['email']).hashed_pw.encode('utf-8')) != User.objects.get(email=postData['email']).hashed_pw:
				errors.append('Username and/or password are invalid.')

		return errors

class User(models.Model):
	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255)
	handle = models.CharField(max_length=16)
	email = models.CharField(max_length=255)
	hashed_pw = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = UserManager()

class BookManager(models.Manager):
	def validate_book(self, postData):
		errors = []

		# print postData

		if len(postData['title']) < 1:
			errors.append('Missing book title.')

		if len(postData['author_list']) < 1 and len(postData['author_input']) < 1:
			errors.append('Missing author.')
		elif len(postData['author_list']) > 1 and len(postData['author_input']) > 1:
			errors.append('Please select author from dropdown or enter a new one, not both')
		
		if len(postData['author_input']) > 1:
			author = postData['author_input']
			if Author.objects.filter(name__contains=postData['author_input']):
				errors.append('Author already exists')
		else:
			author = postData['author_list']

		if Book.objects.filter(author__name__contains=author):
			if Book.objects.filter(title__contains=postData['title']):
				errors.append('Book by the same author already exists')

		return errors

	def create_book(self, postData):
		if len(postData['author_input']) > 1:
			author = postData['author_input']
		else:
			author = postData['author_list']

		author_object = Author.objects.create_author(author)
		book = Book.objects.create(title=postData['title'], author=author_object)
		return book.id

class AuthorManager(models.Manager):
	def create_author(self, author):
		author_object = Author.objects.create(name=author)
		return author_object

class Author(models.Model):
	name = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = AuthorManager()

class Book(models.Model):
	title = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	author = models.ForeignKey(Author)

	objects = BookManager()

class ReviewManager(models.Manager):
	def validate_review(self, postData):
		errors = []

		if len(postData['review']) < 1:
			errors.append('Please type a review for the book.')

		if not len(postData['rating']):
			errors.append('Please select a rating 1-5.')

		return errors

	def create_review(self, postData):
		review = Review.objects.create(content=postData['review'],rating=postData['rating'],user=postData['user'], book=postData['book'])
		return review.id

class Review(models.Model):
	content = models.TextField(max_length=1000)
	rating = models.IntegerField()
	user = models.ForeignKey(User)
	book = models.ForeignKey(Book)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = ReviewManager()

