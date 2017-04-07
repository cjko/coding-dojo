from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def renderIndex():
	return render_template('index.html',loops=12, message='My message')

app.run(debug=True)