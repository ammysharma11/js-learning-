let mydate =new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


let myCreateDate = new Date(2023,0,23,5,3)  // here month starts from zero 
// let myCreateDate= new Date("01-14-2023") // in this format month starts from 01
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


let myTimeStamp =Date.now()   // it gives you time in miliseconds form 1 jan 1970 
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // time in mili seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{weekday:"long"}));