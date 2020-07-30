const models = require('../models');
const { Activity } = require('../models');

const Create = (obj) => {
  return new Promise((resolve, reject) => {
    Activity.create(obj, (err, info) => {
      err? reject(err) : resolve(info);
    })
  })
}

const GetAll = () => {
  return new Promise((resolve, reject) => {
    Activity.find((err, info) => {
      err? reject(err) : resolve(info);
    })
  })
}

const GetType = (type) => {
  return new Promise((resolve, reject) => {
    Activity.create({type}, (err, info) => {
      err? reject(err) : resolve(info);
    })
  })
}

const GetOne = (id) => {
  return new Promise((resolve, reject) => {
    Activity.find({_id: id}, (err, info) => {
      err? reject(err) : resolve(info);
    })
  })
}

const Delete = (id) => {
  return new Promise((resolve, reject) => {
    Activity.deleteOne({_id: id}, (err, info) => {
      err? reject(err) : resolve(info);
    })
  })
}

module.exports = {
  Create,
  GetAll,
  GetType,
  GetOne,
  Delete
}