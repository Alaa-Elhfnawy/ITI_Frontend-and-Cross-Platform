let ball={
    top:10,
    left:15,
    radius : 20,
    // "alaa": 22,
    //  1:'lol',
    // color: 'blue',
    calculateArea: function(){
        return 3.14*this.radius*this.radius;
    },

    //arrow function didn't work with this
    // calculateArea: ()=>{
    //     return 3.14*this.radius*this.radius;
    // },
   // toString(){
        // console.log(this.color);
        // console.log(this.radius);
        // it works   how?
       // return ball.radius.toString();

   // }
}
//console.log(ball['calculateArea()']);
//console.log(ball.toString());
 //console.log(ball[1]);
// console.log(ball.alaa);
 //console.log(ball['color']);
// console.log(ball.color);
// console.log(ball.left);
// console.log(ball.radius);
 //console.log(ball.calculateArea);
// //1256
 //console.log(ball.calculateArea());
// console.log(ball.top);

// ball.radius=30;
// console.log(ball.radius);



// let x='name';
// let myObject={
//     name:'alaa',
// }
// console.log(myObject.name);
// console.log(myObject[x]);//==myObject['name']




// ball.blue='fav color';
// console.log(ball.blue);

// delete ball[1];
// console.log(ball[1]);

// delete proparity , can't delete opject
// delete ball;
// console.log(ball);

// for (let info in ball) {
//    console.log(info, ball[info]);
// }


//this way didn't work
// let arr=[
//     ball.color='red',
//     ball.radius=5,,

//     ball.color='green',
//     ball.radius=7,,

//     ball.color='bink',
//     ball.radius=9,,
// ];

let balls = [
    { radius: 5, color: "red" ,top: 50, left: 30 },
    { radius: 8, color: "blue",top: 20, left: 10 },
    { radius: 10, color: "green",top: 30, left: 20 },
  ];
//it works
// for(let i=0;i<balls.length;i++)
// {
//     ball.radius=balls[i].radius;
    //ball.color=currntball.color;
    //it works
    // console.log(ball.calculateArea());
    // console.log(balls[i].color);
  //  console.log(balls[i].radius);
    //console.log(balls[i].calculateArea());//Uncaught TypeError: balls[i].calculateArea is not a function
   // console.log(balls[i].calculateArea);//undefined
//}


// balls.sort((a,b)=>{
//     if(a.top !=b.top)
//     {
//         return a.top-b.top;
//     }
//     else
//     {
//         return a.left-b.left;
//     }
// });

// console.table(balls);


//------------------------- constructor function--------------

// function Phone(serial)
// {
//     // this is the created opject from constructor function
//     console.log(this);
//     this.serial=serial;
// }

// let phone1= new Phone(1);
// let phone2= new Phone(2);
// //not instance from Phone , created in the window
// let phone3= Phone(3);

//console.log(phone1);
// console.log(phone1.serial);
// console.log(phone2.serial);
//Uncaught TypeError: Cannot read properties of undefined 
//console.log(phone3.serial);
//3
// console.log(window.serial);

// true true false
// console.log(phone1 instanceof Phone);
// console.log(phone2 instanceof Phone);
// console.log(phone3 instanceof Phone);

// true true Uncaught TypeError: Cannot read properties of undefined
// console.log(phone1.constructor==Phone);
// console.log(phone2.constructor==Phone);
// console.log(phone3.constructor==Phone);


//-----------------------------------------prototype-------------------

//console.log(Object.prototype);

// Object.prototype.alaa='el lol';
// let newObject={a:1,b:2,c:3};
// //el lol
// console.log(newObject.alaa);


//----------------------------Class---------------------------------------

class User
{
    static counter=0;
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
        User.counter++;
    }
    showName()
    {
        return `your name is ${this.name}`;
    }
    shoeEmsil()
    {
        return `your email is ${this.email}`;
    }
    static countObjects=function(){
        return `${this.counter} object created`;
    }
}

//must use new to create a new object
 let user1= new User('alaa','alaa@email.com');
// console.log(user1);
// console.log(user1.shoeEmsil());
// console.log(user1.showName());
// console.log(user1.name);
// console.log(User);
// console.log(User.prototype);
// console.log(typeof User);// function
// console.log(User==User.prototype.constructor);//true

//console.log(user1.countObjects());//test.js:190  Uncaught TypeError: user1.countObjects is not a functio
//console.log(User.countObjects());//1 object created
