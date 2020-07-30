const services = require('../services');

// "mongodb://vrathore42:vrathore42password@ds235732.mlab.com:35732/rt-db-demo"
const Create = (req, res) => {
  console.log(req.body);
}

const GetAll = (req, res) => {
  console.log(req.body);
  res.send({"hello": "world"});
}

module.exports = {
  Create,
  GetAll
}