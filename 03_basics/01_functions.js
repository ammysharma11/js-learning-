function sayMyname(){
    console.log("A"),
    console.log("M"),
    console.log("M"),
    console.log("Y")
}
//console.log(sayMyname());

// function addTwoNumbers(number1=2 ,number2=2)
// {
//     console.log(number1+number2);

// }
function addTwoNumbers(number1=2 ,number2=2)
{
     return(number1+number2);
}


const result=addTwoNumbers(3,4);
//console.log(result);

function loginUserMessage(username){
    if(!username)
    {  console.log("enter the username")
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1)
{
    return num1;

}

console.log(calculateCartPrice(200,400,500,4400));


const user=
{
    username :"ammmy",
    price:199

}

// {} these brackets are used to make objects
// [] these brackets are used to make arraays
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);

}
//console.log(handleObject(user));
console.log({username :"ammmy",
            price:199})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
