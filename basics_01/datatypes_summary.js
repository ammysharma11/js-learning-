//primitive

//7 types :String,Number,boolean,Null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp= null;
let usermail;

const id = Symbol('123')
const anotherID= Symbol('123')

console.log(id===anotherID);

// reference (non primitive)

// array, objects, functions   // datatypes of all these come out to be object only
const heros=["shaktimaan","naagraj"];

let myobj=
{
    name:"hitesh",
    age:22,

}

const myfunction = function()
{
    console.log("hello world");

}

console.log(typeof outsideTemp)

// stack(primitive) , heap(non primitive)

let x="ammy"
let y= x;
y="jimmy"
console.log(x)
console.log(y)


//let userone  is a non primitve data type we get memory reference 
let userone = {
    name: "ammy",
    upi: "user@ybl"

}
let usertwo = userone ;
usertwo.name="arry"
console.log(userone.name)