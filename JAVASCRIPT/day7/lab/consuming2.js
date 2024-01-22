

               
                
let bird=document.getElementById('brd');

moveLeft(bird,window.innerWidth-bird.width);

changePositionVertical(bird);


let shutMouse=document.getElementById('sht');
 //console.log(shutMouse);
document.addEventListener('mousemove',function(event){
    shutMouse.style.left=`${event.clientX}px`;
    shutMouse.style.top=`${event.clientY}px`;
});




