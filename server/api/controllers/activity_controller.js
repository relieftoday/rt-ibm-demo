const { activity_service } = require('../services');

// "mongodb://vrathore42:vrathore42password@ds235732.mlab.com:35732/rt-db-demo"
const Test = (req, res) => {
  console.log("[activity_controller: Test]");
  res.send({"hello": "world"});
}

const Create = (req, res) => {
  console.log("[activity_controller: Create]");
  console.log(req.body);
  activity_service.Create(req.body)
  .then(function (obj) {
      if (obj) {
          res.send(obj);
      } else {
          res.sendStatus(404);
      }
  })
  .catch(function (err) {
      res.status(400).send(err);
  });
}

const GetAll = (req, res) => {
  activity_service.GetAll()
  .then(function (docs) {
      if (docs) {
          res.send(docs);
      } else {
          res.sendStatus(404);
      }
  })
  .catch(function (err) {
      res.status(400).send(err);
  });
}

const GetProviderActivities = (req, res) => {
  activity_service.GetProviderActivities(req.params.providerId)
  .then(function (docs) {
      if (docs) {
          res.send(docs);
      } else {
          res.sendStatus(404);
      }
  })
  .catch(function (err) {
      res.status(400).send(err);
  });
}

const Delete = (req, res) => {
  console.log(req.body);
  res.send({"indelete": "success"});
}

module.exports = {
  Create,
  GetAll,
  Delete,
  Test,
  GetProviderActivities
}