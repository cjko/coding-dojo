from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index),
	url(r'^courses/destroy/(?P<id>\d+)$', views.confirm),
	url(r'^delete/(?P<id>\d+)$', views.delete),
	url(r'^courses/create$', views.create),
]