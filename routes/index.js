var express = require('express');
const { dageRun, taskInstances, taskInstancesLog, dageRunConfig } = require('../Controller/dage');



var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/dageRun', dageRun);
router.post('/dageRunConfig', dageRunConfig);
router.post('/taskInstances', taskInstances);
router.post('/taskInstancesLog', taskInstancesLog);

module.exports = router;
