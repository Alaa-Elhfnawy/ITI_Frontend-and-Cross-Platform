let red=document.querySelector('.red');
// red.addEventListener('click',function(){
//   newBox(red);
//     //console.log(this.onclick);
// });

let blue =document.querySelector('.blue');
// blue.addEventListener('click',function(){
//     newBox(blue);
// });

let green=document.querySelector('.green');
green.onclick=function(){
    let Box=green.cloneNode();
    Box.style.margin='0px 2px';
    document.body.appendChild(Box);
    Box.onclick=this.onclick;
    this.onclick=null;
}

blue.onclick=function(){
    let Box=blue.cloneNode();
    Box.style.margin='0px 2px';
    document.body.appendChild(Box);
    Box.onclick=this.onclick;
    this.onclick=null;
}

red.onclick=function(){
    let Box=red.cloneNode();
    Box.style.margin='0px 2px';
    document.body.appendChild(Box);
    Box.onclick=this.onclick;
    this.onclick=null;
}

