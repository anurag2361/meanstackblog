var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var database = require('./config/database.js');

mongoose.connect(database.url);
mongoose.connection.once('open', function () {
    console.log('Succesfully connected to db');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
Blog = require('./models.js');


app.use(logger('dev'));
var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
    Blog.find({}, function (err, data) {
        if (err) {
            console.log('Error Occured while retrieving all blogs');
        }
        res.json(data);
    });
});

app.get('/blogs', function (req, res) {
    Blog.find({}, function (err, data) {
        if (err) {
            console.log('Error Occured while retrieving all blogs');
        }
        res.json(data);
    });
});

app.post('/add', function (req, res) {
    var query = new Blog({
        title: req.body.title,
        bodyHtml: req.body.bodyHtml,
        author: req.body.author,
    });
    var today = Date.now();
    query.created = today;

    query.save(function (error) {
        if (error) {
            console.log(error);
            res.json(error);
        }
        res.json(query);
    });
});

app.get('/blogs/:blogId', function (req, res) {
    Blog.findOne({ '_id': req.params.blogId }, function (err, data) {
        if (err) {
            console.log('Error in finding single blog');
        }
        res.json(data);
    });
});

app.put('/blogs/:blogId/edit', function (req, res) {
    var update = req.body;
    Blog.findOneAndUpdate({ '_id': req.params.blogId }, update, function (err, data) {
        if (err) {
            console.log('error in finding and updating');
        }
        res.json('updated ' + data);
    });
});

app.post('/blogs/:blogId/remove', function (req, res) {
    Blog.findOneAndRemove({ '_id': req.params.blogId }, function (err) {
        if (err) {
            console.log('Error in deleting a blog');
        }
        res.json('Removed Blog');
    });
})


app.listen(port);
console.log('App started on port' + port);