from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index),
	url(r'^register$', views.register),
	url(r'^login$', views.login),
	url(r'^books$', views.books),
	url(r'^books/(?P<id>\d+)$', views.show_book),
	url(r'^users/(?P<id>\d+)$', views.show_user),
	url(r'^books/(?P<id>\d+)/create_review$', views.create_review),
	url(r'^logout$', views.logout),
	url(r'^books/add$', views.add_book),
	url(r'^books/create_book$', views.create_book),
]