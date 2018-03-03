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
  parseFile(req,res,0);
});


/* GET regulation sections (headers/titles) as json array */
router.get('/:id/sections', function(req, res) {
  parseFile(req,res,1);
});

var parseFile = function parseFile(req, res, findSections) {

    //Building filename from params
    var filename = req.params.id + ".xml";
    console.log(filename);
    
    //reading xml from file
    fs.readFile('./xml_regulations/' + filename, function(readErr,data) {
      if(readErr) throw readErr;
      
      xmlParser(data, function(parseErr,result) {
        //Find section titles
        if(findSections)
        {
          var sections = {};
          var sectno = result.CFRGRANULE.PART[0].CONTENTS[0].SECTNO;
          var secnames = result.CFRGRANULE.PART[0].CONTENTS[0].SUBJECT;
          for(i = 0; i < sectno.length; i++)
          { 
            sections[sectno[i]] = sectno[i] + " " + secnames[i];
          }
          
          res.json(sections);
        }
        //Parse entire xml file
        else
        {
          res.json(result);
        }
    });
  });
}


module.exports = router;
