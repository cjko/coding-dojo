from flask import Flask, render_template, redirect, session
from mysqlconnection import MySQLConnector

app = Flask(__name__)

mysql = MySQLConnector(app, 'mydb')

print mysql.query_db('select * from users')

# @app.route('/')
# def renderMain():
# 	return render_template('index.html')

app.run(debug=True)