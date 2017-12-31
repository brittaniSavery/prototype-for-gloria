var express = require('express');
var router = express.Router();
var xmlParser = require('xml2js').parseString;
var fs = require('fs');

/* GET all regulations */
router.get('/', function(req, res) {
  res.json([{
    id: 'part1002',
    name: 'EQUAL CREDIT OPPORTUNITY ACT (REGULATION B)'
  }]);
});

/* GET regulation as json object */
router.get('/:id', function(req, res) {

  //Building filename from params
  var filename = req.params.id + ".xml";
  console.log(filename);
  
  //reading xml from file
  fs.readFile('./xml_regulations/' + filename, function(readErr,data) {
    if(readErr) throw readErr;

    xmlParser(data, function(parseErr,result) {
      res.json(result);
    });
  });
});

module.exports = router;
