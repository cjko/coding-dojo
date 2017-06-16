var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
    date: Date,
    likes: Number
})
mongoose.model('Quote', QuoteSchema)