
var num = process.argv[2];
var message = 'Hello World!';

if (num > 5) {
    console.log(message.split('').reverse().join(''));
} else {
    console.log(message)
}
