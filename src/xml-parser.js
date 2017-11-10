var parseString = require('xml2js').parseString;

parseString(xml, function (err, result) {
    console.dir(result);
});