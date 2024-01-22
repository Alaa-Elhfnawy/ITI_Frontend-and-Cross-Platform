let add=document.getElementById('addButtom');
add.onclick=addCourse;

// let right=document.getElementById('rightList');
// right.onclick=selectCourse('rightList');

let items=document.querySelectorAll('#leftList li');
    for(let i=0;i<items.length ;i++)
    {
        items[i].onclick=function(){
            for(let j=0;j<items.length ;j++)
            {
                items[j].classList.remove('highlight');
            }
            items[i].classList.add('highlight');
        }
    }

let rightItems=document.querySelectorAll('#rightList li');
    for(let i=0;i<rightItems.length ;i++)
    {
        rightItems[i].onclick=function(){
            for(let j=0;j<rightItems.length ;j++)
            {
                rightItems[j].classList.remove('highlight');
            }
            rightItems[i].classList.add('highlight');
        }
    }

// console.log(items);

let rightButton=document.getElementById('moveRight');
rightButton.onclick=function(){

    let selectedCours=document.querySelector('.highlight');
    
       
        document.getElementById('rightList').appendChild(selectedCours.cloneNode(true));
  
        document.getElementById('leftList').removeChild(selectedCours);
}

let LeftButton=document.getElementById('moveLeft');
LeftButton.onclick=function()
{
    
    let selectedCours=document.querySelector('.highlight');
        selectedCours.classList.remove('highlight');
        document.getElementById('leftList').appendChild(selectedCours.cloneNode(true));
        document.getElementById('rightList').remove(selectedCours);
}