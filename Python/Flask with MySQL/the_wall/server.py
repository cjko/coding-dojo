from flask import Flask, render_template, redirect, session, flash, request
from mysqlconnection import MySQLConnector
import os, binascii, md5, re, time

app = Flask(__name__)
app.secret_key = "colinjao"
mysql = MySQLConnector(app, 'the_wall')

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z.-]+$')
PW_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')

@app.route('/')
def renderMain():
	if 'logged_in' not in session:
		session['logged_in'] = False

	if session['logged_in'] == True:
		return redirect('/wall')
	else:
		return render_template('index.html')


@app.route('/wall')
def renderWall():
	query = "SELECT messages.id, messages.message, messages.user_id, users.first_name, users.last_name, DATE_FORMAT(messages.created_at, '%M %d, %Y %I:%i %p') as formatted_date FROM messages LEFT JOIN users ON users.id = messages.user_id ORDER BY messages.created_at DESC"
	messages = mysql.query_db(query)

	query = "SELECT comments.id, comments.comment, users.first_name, users.last_name, comments.message_id, comments.user_id, DATE_FORMAT(messages.created_at, '%M %d, %Y %I:%i %p') as formatted_date FROM messages LEFT JOIN comments ON comments.message_id = messages.id LEFT JOIN users on users.id = comments.user_id ORDER BY messages.created_at DESC"
	comments = mysql.query_db(query)

	print messages

	return render_template('wall.html', messages=messages, comments=comments)

@app.route('/postmessage', methods=['POST'])
def postMessage():
	if session['logged_in'] == True:
		query = "INSERT INTO messages (message, created_at, user_id) VALUES (:message, NOW(), :user_id)"
		data = {
			'message': request.form['message'],
			'user_id': session['user_id']
		}
		mysql.query_db(query, data)
		return redirect('/wall')
	else:
		print "You are not logged in!"
		return redirect('/')

@app.route('/deletemessage/<id>')
def deleteMessage(id):
	if session['logged_in'] == True:
		query = "DELETE FROM comments WHERE message_id = :id; DELETE FROM messages WHERE id = :id"
		data = {
			'id': id
		}
		mysql.query_db(query, data)
		return redirect('/wall')
	else:
		print "You are not logged in!"
		return redirect('/')

@app.route('/deletecomment/<id>')
def deleteComment(id):
	if session['logged_in'] == True:
		query = "DELETE FROM comments WHERE id = :id"
		data = {
			'id': id
		}
		mysql.query_db(query, data)
		return redirect('/wall')
	else:
		print "You are not logged in!"
		return redirect('/')

@app.route('/postcomment', methods=['POST'])
def postComment():
	if session['logged_in'] == True:
		query = "INSERT INTO comments (comment, created_at, message_id, user_id) VALUES (:comment, NOW(), :message_id, :user_id)"
		data = {
			'comment': request.form['comment'],
			'message_id': request.form['message_id'],
			'user_id': session['user_id']
		}
		mysql.query_db(query,data)
		string = '/wall#' + request.form['message_id']
		return redirect(string)
	else:
		return redirect('/')

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
	
	if not PW_REGEX.match(userData['password']):
		flash('Password must contain at least one uppercase letter and one number')
		session['valid'] = False

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
			session['user_id'] = user[0]['id']
			session['first_name'] = user[0]['first_name']
			session['last_name'] = user[0]['last_name']
			session['email'] = user[0]['email']
			# print "LOGGED IN AS", user[0]['first_name'], user[0]['last_name']
		else:
			# print "WRONG PASSWORD"
			flash("Invalid username and/or password")
	elif not session['logged_in']:
		flash("Invalid username and/or password")

	if session['logged_in'] == True:
		return redirect('/wall')
	else:
		return redirect('/')

@app.route('/logout')
def logout():
	session.clear()
	return redirect('/')

app.run(debug=True)











































