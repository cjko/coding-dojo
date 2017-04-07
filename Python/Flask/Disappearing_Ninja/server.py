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
	return render_template('color.html', color=ninja_color)

app.run(debug=True)