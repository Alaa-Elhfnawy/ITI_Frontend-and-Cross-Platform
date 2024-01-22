const createTrackList=function(trackId,parentElement)
{
   let courseList=document.createElement("ul");
      courseList.id=trackId;
   let paretElement=document.getElementById(parentElement);
      paretElement.appendChild(courseList);
      return courseList;

}

const addCourse=function(courseName,ListTrackElement)
{
   let listItems=document.createElement('li');
   listItems.textContent=courseName;
   ListTrackElement.appendChild(listItems);
}

const ChangeImage=function(imgg)
{
   let images=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'];
      let item =document.getElementById(imgg);
      let indx=0;
   setInterval(()=>{
   if(indx==images.length)
   {
      indx=0;
   }
   item.src=images[indx++];
   
    },1000);
}

const removeCourse=function(courseName,ListTrackElement)
{
   let childrens=ListTrackElement.children;
   for(let i=0;i<childrens.length;i++)
   {
      if(childrens[i].textContent==courseName)
      {
         childrens[i].remove();
      }
   }
}
