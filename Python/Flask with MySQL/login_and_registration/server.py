from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import os, binascii, md5, re

app = Flask(__name__)
app.secret_key = "colinjao"
mysql = MySQLConnector(app, 'platform')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z.-]+$')
PW_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')

@app.route('/')
def renderMain():

	return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
	session['registered'] = True
	session['valid'] = True

	# Form field validation
	userData = {
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		'email': request.form['email'],
		'password': request.form['password'],
		'confirm_password': request.form['confirm_pw']
	}

	missingField = 0

	for i in userData:
		if len(userData[i]) < 1:
			missingField = 1
			break

	if missingField:
		flash('Missing field(s)')
		session['valid'] = False
 
	if not EMAIL_REGEX.match(userData['email']):
		flash('Invalid email address')
		session['valid'] = False

	if not NAME_REGEX.match(userData['first_name']) or not NAME_REGEX.match(userData['last_name']):
		flash('Invalid first or last name')
		session['valid'] = False

	if len(userData['password']) < 8:
		flash('Password cannot be less than 8 characters')
		session['valid'] = False
	
	# if not PW_REGEX.match(userData['password']):
	# 	flash('Password must contain at least one uppercase letter and one number')
	# 	session['valid'] = False

	if userData['password'] != userData['confirm_password']:
		flash('Passwords do not match')
		session['valid'] = False

	# Search db, if email does not exist, register user
	query = "SELECT email FROM users WHERE email=:email"
	data = {
		'email': request.form['email']
	}
	users = mysql.query_db(query,data)

	if users:
		session['registered'] = False

	if session['registered'] == True and session['valid'] == True:

		# encrypt password
		salt = binascii.b2a_hex(os.urandom(15))
		encrypted_pw = md5.new(request.form['password'] + salt).hexdigest()

		query = "INSERT INTO users (first_name, last_name, email, encrypted_pw, salt, created_at) VALUES (:first_name, :last_name, :email, :encrypted_pw, :salt, NOW())"
		data = {
			'first_name': request.form['first_name'],
			'last_name': request.form['last_name'],
			'email': request.form['email'],
			'encrypted_pw': encrypted_pw,
			'salt': salt
		}
		mysql.query_db(query, data)

	elif session['registered'] == False and session['valid'] == True:
		flash('Email is already registered')

	return redirect('/')

@app.route('/login', methods=['POST'])
def login():
	session['logged_in'] = False

	query = "SELECT * FROM users WHERE email=:email"
	data = {
		'email': str(request.form['email'])
	}
	user = mysql.query_db(query,data)
	print user

	if user:
		encrypted_pw = md5.new(request.form['password'] + user[0]['salt']).hexdigest()
		if encrypted_pw == user[0]['encrypted_pw']:
			session['logged_in'] = True
			session['first_name'] = user[0]['first_name']
			print "LOGGED IN AS", user[0]['first_name'], user[0]['last_name']
		else:
			print "WRONG PASSWORD"
			flash("Invalid username and/or password")
	elif not session['logged_in']:
		flash("Invalid username and/or password")

	return redirect('/')

@app.route('/logout', methods=['POST'])
def logout():
	session.clear()

	return redirect('/')

app.run(debug=True)































