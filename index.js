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

// let PORT = process.env.NODE_ENV === 'production'? 80 : 3001;
let PORT = 8080;

app.listen(PORT, () => {
  console.log(`Running server in ${process.env.NODE_ENV} on port ${PORT}`);
});

//--------------------------- testing Hello World ----------------------------
// var http = require('http');
// var server = http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// var port = 8080;
// server.listen(port);
// console.log("Server running at http://localhost:%d", port);
