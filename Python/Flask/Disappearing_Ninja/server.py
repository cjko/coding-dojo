from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def renderMain():
	return 'No ninjas here'

@app.route('/ninja')
def renderNinja():
	return render_template('ninja.html')

@app.route('/ninja/<ninja_color>')
def renderColor(ninja_color):

	if ninga_color == 'red'
		filename = "raphael.jpg"
	return render_template('color.html', filename=filename)

app.run(debug=True)