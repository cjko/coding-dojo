from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def renderMain():
	return render_template('index.html')

@app.route('/projects')
def renderProjects():
	return render_template('projects.html')

@app.route('/about')
def renderAbout():
	return render_template('about.html')

app.run(debug=True)