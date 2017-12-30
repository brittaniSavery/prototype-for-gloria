var express = require('express');
var router = express.Router();
var xmlParser = require('xml2js').parseString;
var fs = require('fs');

/* GET all regulations */
router.get('/', function(req, res) {
  res.json([{
    id: 'part1002',
    name: 'EQUAL CREDIT OPPORTUNITY ACT (REGULATION B)'
  }]); //TODO: Add result of xml2js
});

router.get('/:id', function(req, res) {

  res.json(req.params);

  //reading xml from file
  /*fs.readFile(filename, (readErr,data) => {
    if(readErr) throw readErr;

    //parsing the xml read from file
    xmlParser(data, (xmlErr, result) => {
      if(xmlErr) throw xmlErr;

      console.log(result);
      console.log('Done!');
    });
  });*/
});

module.exports = router;
