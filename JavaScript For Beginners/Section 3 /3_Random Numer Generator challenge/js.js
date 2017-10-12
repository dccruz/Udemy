
var UserNumber = prompt("Choose a Number");

UserNumber = parseInt(UserNumber);

var RNumber = Math.floor(Math.random() *UserNumber) +1;

alert("Your Random Number is " + RNumber);