// Global scope mai jo variables declared hota hai unka polution sa bachana ka liye we do iffe


(function chai() {
    // named IIFE
    console.log('DB connected');

}) ();

 // agar do  iffe ek sath likhne hai then use ; (semi colon )  after the first one 
((name)=>{
    console.log(`DB connected two ${name}`);

})('ammy')


