// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo_redux')
mongoose.Promise = global.Promise

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
    date: Date,
    likes: Number
})
mongoose.model('Quote', QuoteSchema)
var Quote = mongoose.model('Quote')
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index');
})

app.post('/quotes', function(req, res) {
    console.log(req.body)
    var date = new Date()
    var quote = new Quote({name: req.body.name, quote: req.body.quote, date: date})
    quote.save(function(err){
        if (err) {
            console.log("You got errors.")
            res.redirect('/')
            return
        }
        res.redirect('/quotes')
    })
})

app.get('/quotes', function(req, res) {
    sort = {'_id': -1}
    Quote.find({}, function(err, data){
        if(err) {
            console.log("You got errors.")
            res.redirect('/')
            return
        }
        var quotes = data
        res.render('quotes', {quotes: quotes})
    }).sort(sort)
    
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
