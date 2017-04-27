from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index),
	# url(r'^signin$', views.signin),
	# url(r'^register$', views.register),

	# url(r'^dashboard$', views.dashboard),

	# ADMIN ROUTES
	# url(r'^dashboard/admin$', views.admin),
	# url(r'^edit/(?P<user_id>\d+)$', views.edit_user),
	# url(r'^users/new$', views.new_user),

	# SHOW USER WALL
	# url(r'^show/(?P<user_id>\d+)$', views.show_user),

	# USER EDIT
	# url(r'^users/edit$', views.edit_user),
	
]