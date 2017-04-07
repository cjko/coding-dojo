from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def renderHome():
	return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
	name = request.form['name']
	location = request.form['location']
	language = request.form['language']
	comment = request.form['comment']
	return render_template('results.html', name=name, location=location, language=language, comment=comment)



app.run(debug=True)