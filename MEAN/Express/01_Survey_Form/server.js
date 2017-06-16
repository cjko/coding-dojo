var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/bower_components'))
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(request, response) {
	response.render('index')
})

app.post('/result', function(request, response) {
	console.log(request.body)
	response.render('result', request.body)
})

app.listen(8000, function() {
	console.log("Running on localhost:8000...")
})