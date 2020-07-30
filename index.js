const express = require('express');
const routes = require('./server/api/routes');
const path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var { dburl } = require('./server/config');


const app = express();

// api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);

// website
app.use(express.static('build'));
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });

let PORT = process.env.NODE_ENV === 'production'? 80 : 3001;

app.listen(PORT, () => {
  console.log(`Running server in ${process.env.NODE_ENV} on port ${PORT}`);
});