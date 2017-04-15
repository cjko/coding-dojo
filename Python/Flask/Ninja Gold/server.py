from flask import Flask, render_template, request, redirect, session
import random
import datetime

app = Flask(__name__)

app.secret_key = 'colin'

@app.route('/')
def renderMain():

	if not 'gold' in session:
		session['gold'] = 0
	if not 'activity_log' in session:
		session['activity_log'] = []

	return render_template('index.html',gold=session['gold'],activity_log=session['activity_log'])


@app.route('/process_money', methods=['POST'])
def processMoney():

	year = datetime.date.today().year
	month = datetime.date.today().month
	day = datetime.date.today().day

	timestamp = datetime.date.today().strftime('%Y/%m/%d') + ' ' +datetime.datetime.now().strftime('%I:%M %p')

	if request.form['action'] == 'farm':
		payout = random.randint(10,20)
		session['gold'] += payout
		message = 'Earned '+str(payout)+' golds from the farm! (' + timestamp + ')'

	elif request.form['action'] == 'cave':
		payout = random.randint(5,10)
		session['gold'] += payout
		message = 'Earned ' + str(payout) + ' golds from the cave! (' + timestamp + ')'

	elif request.form['action'] == 'house':
		payout = random.randint(2,5)
		session['gold'] += payout
		message = 'Earned ' + str(payout) + ' golds from the house! (' + timestamp + ')'

	elif request.form['action'] == 'casino':
		payout = random.randint(-50,50)
		session['gold'] += payout
		if payout > 0:
			message = 'Entered a casino and won ' + str(payout) + ' golds... Nice! (' + timestamp + ')'
		else:
			message = 'Entered a casino and lost ' + str(payout) + ' golds... Ouch.. (' + timestamp + ')'

	if payout > 0:
		activity_text = (message, 'green')
	else:
		activity_text = (message, 'red')

	session['activity_log'].insert(0,activity_text)

	return redirect('/')

app.run(debug=True)