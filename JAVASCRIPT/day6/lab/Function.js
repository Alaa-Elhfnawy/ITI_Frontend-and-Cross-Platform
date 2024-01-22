
let indx=0;
let images=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];
const changeNext=function()
{
  let photo=document.querySelector("img");
  if(indx==images.length)
  {
    indx=0;
  }
  photo.src=images[indx];
  indx++;
}

const changePrevious=function()
{
  let photo=document.querySelector("img");
  if(indx==-1)
  {
    indx=images.length-1;
  }
  photo.src=images[indx];
  indx--;
}
let intervalId;
const slideShow=function()
{
      let photo=document.querySelector("img");
   intervalId=setInterval(()=>{
   if(indx==images.length)
   {
      indx=0;
   }
   photo.src=images[indx++];
    },500);
}

const stopShow=function()
{
  clearInterval(intervalId);
}

const newBox=function(box)
{
  let Box=box.cloneNode(true);
   Box.style.margin='0px 2px';
  //  Box.onclick=box.onclick;
  //  Box.onclick=null;
  //console.log(Box.onclick);
  document.body.appendChild(Box);

}
