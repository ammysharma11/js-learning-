const score=200
console.log(score);

const balance = new Number(100) // this for creating a variable of data type number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //it fixes the value after decimal 

const othernumber = 23.444

console.log(othernumber.toPrecision(4));

const hundreds =100000;
console.log(hundreds.toLocaleString('en-IN'));


//+++++++maths++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());  // it gives value between 0 and 1
console.log((Math.random()*10)+1); // now gives value >= 1
console()
const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
