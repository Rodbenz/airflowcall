var express = require('express');
const { dageRun } = require('../Controller/dage');



var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/dageRun', dageRun);

module.exports = router;
