//singleton 
// Object.create

//object literals 

const mySym=Symbol("key1")
const  JsUser = {
    name : "Ammy",
    "full name":"Amitesh Sharma",
    age: 21,
    [mySym]:mySym,
    location: "Jaipur",
    email:"ammy@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Mondays","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])// where we named varible in the "" as string it is called in [] only not by dot 
console.log(JsUser[mySym])

JsUser.email="ammy@chat.com";
//Object.freeze(JsUser)
JsUser.email="ammy@microsoft.com";
console.log(JsUser);

JsUser.greeting= function(){
    console.log("hello JS user");

}
console.log(JsUser.greeting); //function reference 
console.log(JsUser.greeting());

JsUser.greetingTwo= function()
{
    console.log(`hello JS user , ${this.name}`);

}
console.log(JsUser.greetingTwo());



 