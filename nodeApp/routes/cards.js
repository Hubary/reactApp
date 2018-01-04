var express = require('express');
var router = express.Router();
var mongoCt = require('mongodb').MongoClient;


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  var address = 'mongodb://localhost:27017/chufang';
  mongoCt.connect(address, function (err, db) {
    if (err) {
      console.log('chufang Database error cards!')
    } else {
      var cards = db.collection('cards');
      cards.find({}).toArray(function (err, result) {
        // console.log(result)
        res.send(result); //返回给前端
        db.close();
      })
    }
  })
});

module.exports = router;