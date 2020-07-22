const mongoose = require('mongoose');
mongoose.set("debug",true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

module.exports = mongoose.model('Todo', todoSchema);