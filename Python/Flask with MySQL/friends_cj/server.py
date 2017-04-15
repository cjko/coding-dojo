from flask import Flask, render_template, redirect, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'friends_cj')

@app.route('/')
def renderMain():
	query = "SELECT name, age, DATE_FORMAT(created_at, '%M %e') as monthday, YEAR(created_at) as year FROM friends"
	friends = mysql.query_db(query)

	return render_template('index.html', friends=friends)

@app.route('/add', methods=['POST'])
def addFriend():
	query = "INSERT INTO friends (name, age, created_at) VALUES (:name, :age, NOW());"
	data = {
		'name': request.form['name'],
		'age': request.form['age']
	}
	mysql.query_db(query, data)

	return redirect('/')

app.run(debug=True)