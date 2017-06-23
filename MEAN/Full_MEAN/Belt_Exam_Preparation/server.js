// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DiscussionBoard')
mongoose.Promise = global.Promise
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    'name': { type: String, required: true },
    'topics': [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    'posts': [{type: Schema.Types.ObjectId, ref: 'Post'}],
    'comments': [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, { timestamps: true })

var TopicSchema = new mongoose.Schema({
    'title': { type: String, required: true },
    'description': String,
    'category': { type: String, required: true },
    'creator': { type: Schema.Types.ObjectId, ref: 'User' },
    'posts': [{type: Schema.Types.ObjectId, ref: 'Post'}],
}, { timestamps: true })

var PostSchema = new mongoose.Schema({
    'content': { type: String, required: true },
    'creator': { type: Schema.Types.ObjectId, ref: 'User' },
    'comments': [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    'upvotes': { type: Number },
    'downvotes': { type: Number },
}, { timestamps: true })

var CommentSchema = new mongoose.Schema({
    'content': { type: String, required: true },
    'creator': { type: Schema.Types.ObjectId, ref: 'User' },  
}, { timestamps: true })


mongoose.model('Topic', TopicSchema)
mongoose.model('User', UserSchema)
mongoose.model('Post', PostSchema)
mongoose.model('Comment', CommentSchema)

var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

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

app.post('/commentOn/:post_id', function(req, res){
    var comment = new Comment()
    console.log(req.body.content)
    console.log(req.body.creator)
    comment.content = req.body.content
    comment.creator = req.body.creator
    console.log(comment)

    comment.save(function(err){
        if(err){
            console.log("ERROR:", err)
        } else {
            console.log("SUCCESS!!")

            var post = {}
            console.log("THIS.COMMENT", comment)
            Post.findOne({_id: req.params.post_id})
                .then((data)=>{
                    this.post = data
                    this.post.comments.push(comment)
                    this.post.save(function(err){
                        if(err){
                            console.log("ERROR:", err)
                        } else {
                            console.log("SUCCESS!!")
                        }
                    })
                })
                .catch((err)=>{
                    console.log("ERROR:", err)
                    return res.json(err)
                })

        }
    })

    return res.json(comment)

})

app.post('/postTo/:topic_id', function(req, res){
    console.log("CONTENT", req.body.content)
    var post = new Post()
    post['content'] = req.body.content
    post['creator'] = req.body.creator
    post['comments'] = []
    post['upvotes'] = 0
    post['downvotes'] = 0

    post.save(function(err){
        if(err){
            console.log("ERROR: ",err)
        } else {
            console.log("SUCCESS!!")
        }
    })

    var topic = new Topic()

    Topic.findOne({_id: req.params.topic_id})
        .then((data)=>{
            topic = data
            topic.posts.push(post)
            topic.save(function(err){
                if(err){
                    console.log("ERROR: ",err)
                } else {
                    console.log("SUCCESS!!")
                }
            })
        })
        .catch((err)=>{
            console.log("ERROR:", err)
            return res.json(err)
        })

    return res.json(post)

})

app.post('/users', function(req, res) {
    console.log("Username: "+req.body.name)

    User.find({'name': req.body.name})
        .then((data)=>{
            return res.json(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    var user = new User()
    user.name = req.body.name

    user.save(function(err){
        if(err){
            console.log("ERROR: ",err)
        } else {
            console.log("Success. User ID:",user._id)
        }
    })
    return res.json(user)
})

app.get('/topics/:id', function(req,res){
    Topic.findOne({_id:req.params.id})
        .populate('creator')
        .populate({
            path: 'posts', 
            model: 'Post',
            populate: {
                path:'creator',
                model: 'User',
            }
        })
        .populate({
            path: 'posts', 
            model: 'Post',
            populate: {
                path:'comments',
                model: 'Comment',
                populate: {
                    path: 'creator',
                    model: 'User',
                }
            }
        })
        .exec(function(err,data) {
            if(err) {
                console.log(err)
                return res.json(err)
            }
            console.log(data)
            return res.json(data)
        })
})

app.get('/topics', function(req, res) {
    // console.log(Note.find({}))
    sort = {'_id': -1}
    Topic.find({}, function(err, data) {
        if(err) {
            console.log(err)
            return
        }
        console.log(data)
        return res.json(data)
    }).populate('creator').sort(sort)
})

app.post('/topics', function(req, res) {
    console.log("Content: "+req.body.content)
    var topic = new Topic()
    topic.title = req.body.title
    topic.description = req.body.description
    topic.category = req.body.category
    topic.creator = req.body.creator
    topic.posts = []

    topic.save(function(err){
        if(err){
            console.log("ERROR: ",err)
        } else {
            console.log("SUCCESS!!")
        }
    })
    return res.json(topic)
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
