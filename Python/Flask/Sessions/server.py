from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/show')
def show_user():
  return render_template('user.html', name='Jay', email='kpatel@codingdojo.com')

app.run(debug=True)
