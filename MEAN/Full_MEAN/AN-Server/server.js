// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/AnonymousNotes')
mongoose.Promise = global.Promise

var NoteSchema = new mongoose.Schema({
	'content': String,
    'date': { type: Date, default: Date.now }
})

mongoose.model('Note', NoteSchema)
var Note = mongoose.model('Note')
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)

var bodyParser = require('body-parser');
app.use(bodyParser.json())
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './public/dist')));


app.get('/notes', function(req, res) {
    // console.log(Note.find({}))
    sort = {'_id': -1}
    Note.find({}, function(err, data) {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
        return res.json(data)
    }).sort(sort)
})

app.post('/notes', function(req, res) {
    console.log("Content: "+req.body.content)
    var note = new Note()
    note.content = req.body.content
    note.save(function(err){
        if(err){
            console.log("ERROR: ",err)
        } else {
            console.log("SUCCESS!!")
        }
    })
    return res.json(note)
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
