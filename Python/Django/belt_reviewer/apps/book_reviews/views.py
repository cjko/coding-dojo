# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from models import User, Book, Review, Author

# RENDER login and registration, or REDIRECT to book homepage
def index(request):
	if 'user_id' in request.session:
		return redirect('/books')
	return render(request,'book_reviews/index.html')

# RENDER book homepage, or REDIRECT to login and registration
def books(request):
	if 'user_id' in request.session:
		context = {
			'user': User.objects.get(id=request.session['user_id']),
			'books': Book.objects.all().order_by('-created_at')[:3],
			'reviews': Review.objects.all(),
		}
		return render(request, 'book_reviews/books.html',context)
	return redirect('/')

# RENDER add a new book title and review
def add_book(request):
	context = {
		'user': User.objects.get(id=request.session['user_id']),
		'books': Book.objects.all(),
		'authors': Author.objects.all(),
	}
	return render(request,'book_reviews/add_book.html',context)

# RENDER book info
def show_book(request, id):
	context = {
		'book': Book.objects.get(id=id),
		'reviews': Review.objects.filter(book=Book.objects.get(id=id))
	}
	return render(request,'book_reviews/book_info.html', context)

# RENDER book info
def show_user(request, id):
	context = {
		'user': User.objects.get(id=id),
		'reviews': Review.objects.filter(user=User.objects.get(id=id))
	}
	return render(request,'book_reviews/user_info.html', context)

# PROCESS new book and review data
def create_book(request):
	postData = {
		'title': request.POST['title'],
		'author_list': request.POST['author_list'],
		'author_input': request.POST['author_input'],
		'review': request.POST['review'],
		'rating': request.POST['rating'],
		'user': User.objects.get(id=request.session['user_id']),
	}

	# print postData

	# VALIDATE book data and review data
	book_errors = Book.objects.validate_book(postData)
	review_errors = Review.objects.validate_review(postData)

	# SUCCESS: create book and review
	if not book_errors and not review_errors:
		postData['book'] = Book.objects.get(id=Book.objects.create_book(postData))
		Review.objects.create_review(postData)
		return redirect('/books')
	
	# ERROR MESSAGES
	for book_error in book_errors:
		messages.error(request, book_error)

	for review_error in review_errors:
		messages.error(request, review_error)
	
	return redirect('/books/add')

def create_review(request,id):
	postData = {
		'review': request.POST['review'],
		'rating': request.POST['rating'],
		'user': User.objects.get(id=request.session['user_id']),
		'book': Book.objects.get(id=id),
	}

	review_errors = Review.objects.validate_review(postData)

	if not review_errors:
		Review.objects.create_review(postData)

	for review_error in review_errors:
		messages.error(request, review_error)


	string = '/books/' + id
	return redirect(string)

# PROCESS user registration
def register(request):
	postData = {
		'first_name': request.POST['first_name'],
		'last_name': request.POST['last_name'],
		'handle': request.POST['handle'],
		'email': request.POST['email'],
		'password': request.POST['password'],
		'confirm_pw': request.POST['confirm_pw'],
	}


	# if no errors
	if not User.objects.register(postData):
		# add user to database
		new_user_id = User.objects.create_user(postData)
		request.session['user_id'] = new_user_id
		# messages.success(request, 'Successfully registered!')

		return redirect('/books')

	for error in User.objects.register(postData):
		messages.error(request, error)

	return redirect('/')

# PROCESS user login
def login(request):

	postData = {
		'email': request.POST['email'],
		'password': request.POST['password'],
	}

	#if no errors
	if not User.objects.login(postData):
		# find id matching email
		user_id = User.objects.get(email=postData['email']).id
		request.session['user_id'] = user_id
		# messages.success(request, 'Successfully logged in!')
		return redirect('/books')

	for error in User.objects.login(postData):
		messages.error(request, error)

	return redirect('/')

# REDIRECT to login and registration when logged out
def logout(request):
	request.session.clear()
	return redirect('/')


















