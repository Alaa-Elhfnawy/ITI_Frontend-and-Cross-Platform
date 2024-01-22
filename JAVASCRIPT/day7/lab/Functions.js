
const changePosition=function(imageObject){
    let x=(Math.random()*window.innerWidth-imageObject.width);
    if(x<window.innerWidth-imageObject.width)
    {
        imageObject.style.left=x+"px";
    }
}
const moveDown=(imageObject,top)=>{
    let id=setInterval(()=>{    
         top+=10;
         if(top<(window.innerHeight-imageObject.height))
         imageObject.style.top=top+"px";
         else
         {
             clearInterval(id);
             imageObject.src='images/Uovo_sorridente.png';
             //imageObject.style.visibility="visible";
             //imageObject.src=newObject;
         }
         catchEgg(egg,basket);
    },50);
 }

 const catchEgg=function(eggObject,basketObject)
{
   let eggCordinate=eggObject.getBoundingClientRect();
   let basketCordinate= basketObject.getBoundingClientRect();
   let horizontal=(eggCordinate.right>=basketCordinate.left)&&(eggCordinate.left<=basketCordinate.right)
   if(((window.innerHeight-eggCordinate.bottom)<=basketCordinate.top)&&horizontal)
   {
      // eggObject.classList.remove("visible");
      eggObject.style.visibility="hidden";
     // console.log('hgyg');
   }   
}
 
//-------------------------------------------------------------------------
const changePositionVertical=function(imageObject)
{
   let x=(Math.random()*window.innerHeight-imageObject.height);
   if(x<window.innerHeight-imageObject.height)
   {
       imageObject.style.top=x+"px";
   }
}

 const moveLeft=(imageObject,left)=>{
    
     let id=setInterval(()=>{
      //  console.log('hukj');
         left-=10;
         if(left>=-160)
         imageObject.style.left=left+"px";
         else
         {
             clearInterval(id);
         }
         document.addEventListener('click', ()=> {
            imageObject.src='images/deadBird.jpg';
             clearInterval(id);
             //why variable didn't work?
             deadBird(imageObject,0);
        });

        //  imageObject.onclick=function()
        //  {
           
        //     imageObject.src='images/deadBird.jpg';
        //      clearInterval(id);
        //      //why variable didn't work?
        //      deadBird(imageObject,0);
        //  }

     },50);
 };

 const deadBird=function(imageObject,top){
    let id=setInterval(()=>{    
        top+=10;
        if(top<(window.innerHeight-imageObject.height))
        imageObject.style.top=top+"px";
        else
        {
            clearInterval(id);
            imageObject.style.visibility="hidden";
        }
   },50);
 }


 //---------------------------------------------------------------------------------------

 const addCourse=function()
 {
    let courseName=document.getElementById('newCourse').value;
    if(courseName)
    {
        let courseItem=document.createElement('li');
        courseItem.textContent=courseName;
        document.getElementById('leftList').appendChild(courseItem);
    }
 }

//why it didn't work as a function
//  const selectCourse=function(list)
//  {
//     let items=document.querySelectorAll('#list li');
//     for(let i=0;i<items.length ;i++)
//     {
//         items[i].onclick=function(){
//             for(let j=0;j<items.length ;j++)
//             {
//                 items[j].classList.remove('highlight');
//             }
//             items[i].classList.add('highlight');
//         }
//     }
//  }