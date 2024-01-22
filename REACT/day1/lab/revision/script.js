// //var x=5;
// var a=100;
// var fun =function()
// {
//     console.log('hi');
// }

// //declartion, statement
// function hi(){};

// //expression
// const x=function(){};
// let y='hello';
// a=5;//==window.a=5 and == var a=5
// let a;
//console.log(a);//script.js:15  Uncaught ReferenceError: Cannot access 'a' before initialization

//arrow function
// const add=(a,b)=>a+b;

//const fun= (a) => a+5;

//template literals
// let x='lol';
// console.log(`hello ya ${x}`);

// arr Destructing
// let arr =[1,2,3,4,5,6];
// const [firstNum,secondNum,...numbers]=arr;
// const first=arr[0];
// const second=arr[1];// the same as above
// console.log(first,second);
// console.log(numbers);//rest parameters

// object destructing
// const {secondName}={firstName:"lol",secondName:"abdpp"};
// console.log(secondName);//match the same name

// function say(firstparm,secondparm,...all)
// {
//     console.log(all);////rest parameter
//     console.log(...all)//sprid parameter
// }

// const {first,...rest}={first:1,second:2,third:3};
// const obj={nm:'lki',age:3};

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello()
//   {
//     console.log(`hello,${this.name}`);
//   }
// }

// class Employee extends Person{
//     constructor(n) {
//         super(n);
//     }
// }
// const ahmed=new Person('ahmed');
// ahmed.sayHello();

// const emp=new Employee ('lol');
// emp.sayHello();

// const arr=['ljkj','alaa','gehad'];
// //higher order function : functiion that taks one or more function as arguments
// const newArr=arr.map((...all)=>{
//     //console.log(elment);
//     //return `hello ${elment}`;

//     console.log(all);// alaa 1 arr(3)
// });

