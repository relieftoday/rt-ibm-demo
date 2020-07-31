const express = require('express');
const { activity_controller } = require('../controllers');
const events = express.Router();

events.get('/all', activity_controller.GetAll);
events.get('/test', activity_controller.Test);
events.post('/create', activity_controller.Create);
events.delete('/delete', activity_controller.Delete);
events.get('/:providerId', activity_controller.GetProviderActivities);

module.exports = events;