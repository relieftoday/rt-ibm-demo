var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Activity = new Schema({
  lng: {type: Number, required: true},
  lat: {type: Number, required: true},
  activityBy: {type: String, required: true},
  time: {type: Date, default: Date.now},
  seeker: {
    activityType: {type: String},
    seekerName:  {type: String},
    seekerPhone: {type: String},
    isMedical: {type: Boolean},
    count: {type: Number}
  },
  provider: {
    address: {type: String},
    providerName: {type: String},
    providerId: {type: Number},
    activityType: {type: String},
    needVolunteers: {type: Boolean},
    activityName: {type: String},
    description: {type: String},
  },
  community: {
    count: {type: Number},
    activityType: {type: String},
    communityName: {type: String},
    communityPhone: {type: String},
    communityNeeds: {type: String}
  }
})

module.exports = mongoose.model('Activity', Activity);