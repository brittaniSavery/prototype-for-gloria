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

/* GET body of sections */
router.get('/:id/section/:secid', function(req, res) {
  parseFile(req,res,2);
});

function parseFile(req, res, selectedPart) {

    //Building filename from params
    var filename = req.params.id + ".xml";
    
    //reading xml from file
    fs.readFile('./xml_regulations/' + filename, function(readErr,data) {
      if(readErr) return console.error('An error occurred: ', readErr);
      
      //parse the xml to json
      xmlParser(data, function(parseErr,result) {
        if(parseErr) return console.error('An error occurred: ', parseErr);

        switch(selectedPart)
        {
          //Find section titles
          case 1:
            var sections = {};
            var sectno = result.CFRGRANULE.PART[0].CONTENTS[0].SECTNO;
            var secnames = result.CFRGRANULE.PART[0].CONTENTS[0].SUBJECT;
            for(i = 0; i < sectno.length; i++)
            { 
              sections[sectno[i]] = sectno[i] + " " + secnames[i];
            }
            
            res.json(sections);
          break;

          //Find body of regulation sections
          case 2:
            var selectedSection = req.params.secid;
            console.log('Section id: '+selectedSection);
          break;

          //Parse entire xml file
          default:
            res.json(result);
        }
    });
  });
}


module.exports = router;
