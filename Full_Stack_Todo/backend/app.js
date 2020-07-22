const express = require('express');
const app = express();
const todo = require('./models/todo');
const port = 3001;
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
const morgan = require('morgan');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/todos', todoRoutes);
app.use(cors());
app.use(morgan('tiny'));


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_app', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))