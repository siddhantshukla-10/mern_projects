var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/todo');
// middleware that is specific to this router
// define the home page route
router.get('/', function (req, res) {
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => console.log(err));
})

router.post('/', function (req, res) {
  Todo.create(req.body)
    .then(todo => res.send(todo))
    .catch(err => console.log(err));
})

router.delete('/:id',function (req,res) {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => console.log(err));
})






// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router