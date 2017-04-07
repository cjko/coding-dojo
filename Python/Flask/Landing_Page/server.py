from flask import Flask, render_template, redirect, request
app = Flask(__name__)

@app.route('/')
def renderIndex():
	return render_template('index.html')

@app.route('/ninjas')
def renderNinjas():
	return render_template('ninjas.html')

@app.route('/dojos/new')
def renderForm():
	return render_template('dojos.html')

@app.route('/submitted', methods=['POST'])
def submittedForm():
	name = request.form['name']
	rank = request.form['rank']
	email = request.form['email']
	password = request.form['password']
	return redirect('/')
	
app.run(debug=True)