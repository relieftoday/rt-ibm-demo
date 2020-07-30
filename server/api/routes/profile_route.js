const express = require('express');

const profile = express.Router();

profile.use('/', (req, res, next) => {
  console.log("in Profile Router");
  res.send('<h1>in profile</h1>');
})

module.exports = profile;