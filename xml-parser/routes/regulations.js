var express = require('express');
var router = express.Router();
var xmlParser = require('xml2js').parseString;

/* GET all regulations */
router.get('/', function(req, res, next) {
  res.json([{
    id: 'part1002',
    name: 'EQUAL CREDIT OPPORTUNITY ACT (REGULATION B)'
  }]); //TODO: Add result of xml2js
});

module.exports = router;
