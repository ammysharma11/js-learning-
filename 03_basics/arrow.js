const user= {
    username: "ammy",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);
       // console.log(this)
    }


}
//this keyword is used for current context 
 //user.welcomeMessage();
// user.username='sam';
// user.welcomeMessage();

// console.log(this)   now this refers in node environment refers to the empty object 


// function chai()
// {
//     let username = "ammy"
//     console.log(this.username);  
//     // we can't use  the this inside the function 

// }
// chai()

// const chai = function()
// {
//     let username = "ammy"
//     console.log(this.username);  
        // we get undefined here
//     // we can't use  the this inside the function 

// }
// chai()


const chai = () =>
{
    let username = "ammy"
    console.log(this.username);  
    // we still get undefined here 
    // we can't use  the this inside the function 

}
chai()


// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
const addtwo =(num1,num2)=> (num1+num2)  // () when we these brackets we don't need to use return key  word here
   //implictling defining by arrow function 

console.log(addtwo(3,4));




