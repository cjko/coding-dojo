var mongoose = require('mongoose');
var Quote = mongoose.model('Quote')

module.exports = {
	create: function(req, res) {
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
	},
	show: function(req, res) {
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
	}
}