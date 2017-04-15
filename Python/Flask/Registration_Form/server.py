from flask import Flask, render_template, request, redirect, flash, session
import re

app = Flask(__name__)
app.secret_key = 'colinjao'

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z.-]+$')
PW_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')
# DATE_REGEX = re.compile(r'((?:0[1-9])|(?:1[0-2]))\/((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/(\d{4})')

@app.route('/')
def renderMain():

	if not 'success' in session:
		session['success'] = False
	
	if session['success'] == True:
		successMsg = 'Thank you for submitting your information.'
		print successMsg
		session['success'] = False
	else:
		successMsg = ''

	return render_template('index.html', successMsg=successMsg)

@app.route('/submit', methods=['POST'])
def submitForm():
	session['success'] = True

	userData = {
		'email': request.form['email'],
		'first_name': request.form['first_name'],
		'last_name': request.form['last_name'],
		# 'birthdate': request.form['birthdate'],
		'password': request.form['password'],
		'confirm_password': request.form['confirm_password']
	}

	missingField = 0

	for i in userData:
		if len(userData[i]) < 1:
			missingField = 1
			break

	if missingField:
		flash('Missing field(s)')
		session['success'] = False
 
	if not EMAIL_REGEX.match(userData['email']):
		flash('Invalid email address')
		session['success'] = False

	if not NAME_REGEX.match(userData['first_name']) or not NAME_REGEX.match(userData['last_name']):
		flash('Invalid first or last name')
		session['success'] = False

	# if not DATE_REGEX.match(userData['birthdate']):
	# 	flash('Invalid birth date')
	# 	session['success'] = False

	if len(userData['password']) < 8:
		flash('Password cannot be less than 8 characters')
		session['success'] = False
	
	if not PW_REGEX.match(userData['password']):
		flash('Password must contain at least one uppercase letter and one number')
		session['success'] = False

	if userData['password'] != userData['confirm_password']:
		flash('Passwords do not match')
		session['success'] = False

	return redirect('/')

app.run(debug=True)