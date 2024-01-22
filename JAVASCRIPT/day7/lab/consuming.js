
// let eggCordinate=0;
//  let basketCordinate=0;
let egg=document.getElementById('egg');
 changePosition(egg);
 //let brokenEgg=document.getElementsByClassName('br');
 moveDown(egg,0);

  let basket=document.getElementById('basket');
  let position=0;
document.addEventListener('keydown',function(event){
    if(event.key=='ArrowLeft')
        position=Math.max(position-15,0);
    else
        position=Math.min(position+15,window.innerWidth-basket.width);
  basket.style.left=position+'px';
 })

//   eggCordinate=egg.getBoundingClientRect();
//   basketCordinate= basket.getBoundingClientRect();
//      if((eggCordinate.bottom<=basketCordinate.top)) 
//     {
//         egg.classList.remove("visible");
//     }   
//      console.log(eggCordinate.bottom);
//      console.log(basketCordinate.top);














    
//});