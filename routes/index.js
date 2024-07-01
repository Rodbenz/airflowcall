var express = require('express');
const { webhook, richmenu } = require('../Controller/line');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/webhook', webhook);

router.post('/richmenu', richmenu);

module.exports = router;
