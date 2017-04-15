from flask import Flask, render_template, redirect, flash, request, session
import re

app = Flask(__name__)
app.secret_key = 'colin'

@app.route('/')
def renderMain():
	return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
	session['name'] = request.form['name']
	session['location'] = request.form['location']
	session['language'] = request.form['language']
	session['comment'] = request.form['comment']

	error = 0

	if len(session['name']) < 1:
		flash('Name cannot be empty!')
		error += 1
	if len(session['comment']) < 1:
		flash('Comment cannot be empty!')
		error += 1
	if len(session['comment']) > 120:
		flash('Comment is too long.')
		error += 1

	if error:
		return redirect('/')
	else:
		return redirect('/result')

@app.route('/result')
def result():
	return render_template('result.html', name=session['name'], location=session['location'], language=session['language'], comment=session['comment'])

app.run(debug=True)