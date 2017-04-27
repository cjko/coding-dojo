from django.shortcuts import render, redirect
from models import User

# Create your views here.
def index(request):
	request.session['user_id'] = 1

	context = {
		'users': User.objects.all()
	}
	return render(request, 'friends/index.html', context)

def add_user(request):
	User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], handle=request.POST['handle'])
	return redirect('/')

def add_friend(request, user_id):

	User.objects.get(id=user_id).friends.add(User.objects.get(id=request.POST['friend_id']))


	return redirect('/')
