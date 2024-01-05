const arr=[1,2,3,4,5]
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// for(const num of arr)
// {
//     console.log(num);

// }

// const map= new Map();
// map.set('IN','india')
// map.set('np','NEPAL')
// for(const [h,y] of map)
// {
//     console.log(h);
// }

const myObject ={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

// for( const key in myObject)
// {
//     //console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);

// }

const prog =["js","rb","py","java","cpp"]
// for(const key in programming)
// {
//     console.log(programming[key]);

// }


//// for.Each()  call back function 

//  prog.forEach(function (val){
//     console.log(val);

//  })

//  prog.forEach((item)=> {
//     console.log(item);

//  })

//  function printMe(item)
//  {
//     console.log(item);

//  }
// prog.forEach(printMe);

// prog.forEach((item,index,arr)=>{
//   console.log(item,index,arr);

// })
const myCoding=[
    {
        languageName:"java"
    
    },
    {
        languageName:"c++"
    
    },
    {
        languageName:"ruby"
    
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
