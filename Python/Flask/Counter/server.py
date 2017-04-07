from flask import Flask, render_template, session, request, redirect

app = Flask(__name__)

app.secret_key = 'as023e09'

# firstVisit = True

@app.route('/')
def counter():
	try:
		session['counter'] += 1
	except KeyError:
		session['counter'] = 1

	# global firstVisit

	# if firstVisit:
	# 	session['counter'] = 1
	# 	firstVisit = False
	# else:
	# 	session['counter'] += 1

	return render_template('counter.html',counter=session['counter'])

@app.route('/modifyCounter', methods=['POST'])
def modifyCounter():
	if request.form['action'] == '+2':
		session['counter'] += 1
	elif request.form['action'] == 'Reset':
		session['counter'] = 0
	return redirect('/')


app.run(debug=True)