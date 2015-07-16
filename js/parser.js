var esprima = require('esprima');
var fs = require('fs');

var program = fs.readFileSync(process.argv[2]).toString();

//or

var program = fs.readFileSync("example/hello_world.js").toString();

// loc = true doesn't seem to be working? idk
var parsed = esprima.parse(program, loc=true);

console.log(parsed);
