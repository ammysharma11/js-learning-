const name= "ammy"
const repocount =50

console.log(name + repocount + " value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);



const gameName = new String('ammysharma')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const anotherstring= gameName.slice(-8,4)
console.log(anotherstring);

const newx=" ammmy  "
console.log(newx.trim())

const url="https:ammy.com/ammy%20Sharma"

console.log(url.replace('%20','-'))

console.log(url.includes('am'))
console.log(gameName.split('-'))