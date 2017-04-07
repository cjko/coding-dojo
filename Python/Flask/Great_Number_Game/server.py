from flask import Flask, render_template, redirect, request, session
import random

app = Flask(__name__)

app.secret_key = 'colin'

first_visit = True
numberToGuess = random.randint(1,100)

@app.route('/')
def renderMain():
	global first_visit
	global numberToGuess 

	if first_visit == True:
		session['numberToGuess'] = numberToGuess
		print session['numberToGuess']
		session['proximity'] = ''
		session['numberOfGuesses'] = 0
		first_visit = False

	return render_template('index.html', numberToGuess=session['numberToGuess'], proximity=session['proximity'], numberOfGuesses=session['numberOfGuesses'])

@app.route('/guess', methods=['POST'])
def processGuess():
	guess = request.form['guess']

	session['numberOfGuesses'] += 1

	print guess

	if int(guess) > 100 or int(guess) < 0:
		session['proximity'] = 'Please enter a number between 1 and 100'
	elif int(guess) == int(session['numberToGuess']):
		session['proximity'] = 'was the number!'
	elif int(guess) < int(session['numberToGuess']):
		session['proximity'] = 'Too low!'
	elif int(guess) > int(session['numberToGuess']):
		session['proximity'] = 'Too high!'

	return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
	global first_visit
	global numberToGuess
	numberToGuess = random.randint(1,100)
	first_visit = True
	return redirect('/')

app.run(debug=True)
