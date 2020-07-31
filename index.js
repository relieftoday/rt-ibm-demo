const express = require('express');
const routes = require('./server/api/routes');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { dburl, dburl_prod } = require('./server/config');
const cors = require('cors');


const app = express();

// cors
// app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})

// api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);

// website
app.use(express.static('build'));

// Db connect
const db = process.env.NODE_ENV === 'production' ? dburl_prod : dburl;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

let PORT = process.env.NODE_ENV === 'production'? 80 : 3001;
// let PORT = 8080;

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
