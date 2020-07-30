const express = require('express');

const index = express.Router();

const activityRoute = require('./activity_route');
const profileRoute = require('./profile_route');


index.use('/activity', activityRoute);
index.use('/profile', profileRoute);

module.exports = index;