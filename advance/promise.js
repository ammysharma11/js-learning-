// const promiseOne=new Promise
// (function(resolve,reject)
// {
//     //do a asyn task
//     setTimeout(() => {
//         console.log('Asyn task is complete');
//         resolve();
//     },1000)
// })
// promiseOne.then(function()
// {
//     console.log("Promise consumed");

// })



/////////**********PROMISE 2 */

// new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//        console.log("Async task 2");
//        resolve();
//     },1000)
// }).then(function(){
//     console.log("Asyn 2 resolved");
// })


///////////****PROMISE 3 */
// const promiseThree=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//             resolve({username:"chai",email:"chai@example.com"})
//         },1000)

//     })

//     promiseThree.then(function(user){
//         console.log(user);
//     })
// /////////////PROMISE 4
// const promiseFour=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let error=false;
//         if(!error)
//         {
//             resolve({username:'ammy',rollno:'123'})
//         }
//         else
//         {
//             reject('error:something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
// console.log(user);
// return user.username;
// }).then((x)=>{console.log(x)
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("the promise is either resolved or rejected"))


///////**********PROMISE 5 */

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
                let error=false;
                if(!error)
                {
                    resolve({username:'ammy',rollno:'123'})
                }
                else
                {
                    reject('error:something went wrong')
                }
            },1000)
})
async function consumePromiseFive(){
    try
    {
        const response =await promiseFive
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}
consumePromiseFive();


async function getallusers(){
    try{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')

    const data=await response.json()
    console.log(data);

      }
      catch(error)
      {
        console.log("E:",error)
      }
}


fetch().then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);

})