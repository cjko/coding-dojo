from flask import Flask, render_template, redirect, request, session
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "colinjao"
mysql = MySQLConnector(app, 'emails')

@app.route('/')
def renderMain():
	message = ''

	if session['success'] == False:
		message = 'Email is not valid!'

	return render_template('index.html', message=message)

@app.route('/validate', methods=['POST'])
def validate():
	# search DB for email first, validate, if success, redirect to success
	session['success'] = True

	query = "SELECT * from users"
	users = mysql.query_db(query)
	for user in users:
		if request.form['email'] == user['email']:
			session['success'] = False

	if session['success'] == False:
		return redirect('/')
	else:
		session['email'] = request.form['email']
		query = "INSERT INTO users (email, created_at) VALUES (:email, NOW())"
		data = {
			'email': request.form['email']
		}
		mysql.query_db(query, data)
		return redirect('/success')

@app.route('/success')
def renderSuccess():
	query = "SELECT id, email, DATE_FORMAT(created_at, '%m/%e/%Y %I:%i %p') as created_at FROM users"

	users = mysql.query_db(query)

	if 'delete' not in session:
		session['delete'] = False
		deleted = ''
	elif session['delete'] == True:
		deleted = session['email'], "has been deleted!"

	return render_template('success.html', users=users, email=session['email'], deleted=deleted)

@app.route('/delete', methods=['POST'])
def deleteUser():
	print "ID: ",request.form['id']
	query = "DELETE FROM users WHERE id = :id"
	data = {
		'id': request.form['id']
	}

	mysql.query_db(query, data)	

	return redirect('/success')


app.run(debug=True)

















