var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';

var f = a || b || c || d || e;

console.log(f);


var a; // undefined (falsy value)
var b = null; // null (falsy value)
var c = undefined; //undefined //(falsy value)
var d = 4; // number (NOT falsy)
var e = 'five'; // assigment short circuits before reaching here

var f = a || b || c || d || e;

//The answer is 4