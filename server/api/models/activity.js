var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Activity = new Schema({
  lng: {type: String, required: true},
  lat: {type: String, required: true},
  address: {type: String, required: true},
  activityType: {type: String, required: true},
  date: {type: Date, default: Date.now},
  activityName: {type: String, required: true},
  description: {type: String, required: true},
  agencyName: {type: String, required: true}
})

module.exports = mongoose.model('Activity', Activity);