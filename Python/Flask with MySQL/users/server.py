from flask import Flask, render_template, redirect, session, flash, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "colinjao"
mysql = MySQLConnector(app, 'users_assignment')

@app.route('/')
def renderMain():
	return redirect('/users')

@app.route('/users')
def renderUsers():
	query = "SELECT *, CONCAT_WS(' ', first_name, last_name) AS full_name, DATE_FORMAT(created_at, '%M %d, %Y %I:%i %p') AS formatted_date FROM users"
	users = mysql.query_db(query)

	return render_template('users.html', users=users)

@app.route('/users/<id>')
def renderUser(id):
	query = "SELECT *, CONCAT_WS(' ', first_name, last_name) AS full_name, DATE_FORMAT(created_at, '%M %d, %Y %I:%i %p') AS formatted_date FROM users WHERE id = :id"
	data = {
		'id': id
	}
	user = mysql.query_db(query, data)
	return render_template('user.html', user=user)

@app.route('/users/new')
def renderAddUser():
	return render_template('add_user.html')

@app.route('/users/create', methods=['POST'])
def createUser():
	query = "INSERT INTO users (first_name, last_name, email, created_at) VALUES (:first_name, :last_name, :email, NOW())"
	data = {
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email']
	}
	id = mysql.query_db(query, data)
	routeString = '/users/' + str(id)
	return redirect(routeString)

@app.route('/users/<id>/edit')
def renderEditUser(id):
	query = "SELECT * FROM users WHERE id = :id"
	data = {
		'id': id
	}
	user = mysql.query_db(query, data)
	return render_template('edit_user.html', user=user)

@app.route('/users/<id>/destroy')
def renderDeleteUser(id):
	query = "DELETE FROM users WHERE id = :id"
	data = {
		'id': id
	}
	mysql.query_db(query, data)
	return redirect('/')

@app.route('/users/<id>/update', methods=['POST'])
def updateUser(id):
	query = "UPDATE users SET first_name=:first_name, last_name=:last_name, email=:email, updated_at=NOW() WHERE id = :id"
	data = {
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email'],
		'id': id
	}
	mysql.query_db(query, data)
	routeString = '/users/' + str(id)
	return redirect(routeString)

app.run(debug=True)