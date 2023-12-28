const marvel_heros=['thor', 'iron man ']
const dc_heros= ['superman', 'flash'];

marvel_heros.push[dc_heros]

console.log(marvel_heros)
console.log(marvel_heros[3][1])

const new_heros =marvel_heros.concat(dc_heros);

console.log(x)

const x=[...marvel_heros,...dc_heros];  // spread method
console.log(x)

const another_array = [1,2,3,[2,3,2]];
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("ammy"))
console.log(Array.from("ammy"));
console.log(Array.from({name:"ammy"})) // interesting it returns [] as we need to specify it need to convert by keys or value 


let x1= 100;
let x2=200;  
let x3 =300;
console.log(Array.of(score1,score2,score3));


