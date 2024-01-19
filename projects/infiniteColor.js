//generate a random color

const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
           color+=hex[Math.floor(Math.random() * 16)];
    }
    return color ;
    };
    console.log(randomColor());
    let m;
    const startChangingColor = function()
    {
      if(!m)
      {
        m = setInterval(x,1000);
 
      }
     
      function x()
      {
      document.body.style.backgroundColor=randomColor();
      }
     
    } ;
    const stopChangingcolor = function()
    {
      clearInterval(m);
      m=null;
    };
    document.querySelector('#start').addEventListener('click',startChangingColor);
    document.querySelector('#stop').addEventListener('click',stopChangingcolor);
 