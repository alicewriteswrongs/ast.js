var esprima = require('esprima');
var fs = require('fs');

var program = fs.readFileSync(process.argv[1]);

var parsed = esprima.parse(program);


