var esprima = require('esprima');
var fs = require('fs');

var program = fs.readFileSync(process.argv[2]);

var parsed = esprima.parse(program);

console.log(parsed);
