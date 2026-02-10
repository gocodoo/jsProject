

// console.log(name);
// const name="John Doe";
// name="John Doe";
// console.log(name);

// var 

// for(var i = 0; i < 3; i++) {

// console.log(i);
// } // result : 0 1 2 3

// let 
// 0 1 2 3
// for (let i = 0; i < 3; i++) {

// console.log(i);
// } // result : 0 1 2

// const: can't redeclare

// for(const i = 0; i < 3; i++) {
//     console.log(i);
// } // result : TypeError: Assignment to constant variable.

// object 
// const user = { name : "Vanna", age : 25 };
// user.name = "John Doe";
// console.log(user.name); 


// const colors =  ["red", "green"];
// colors.push("blue");
// console.log(colors);

// Ex let

// obj can't loop , to use obj u must call property name
// const users = { name : "Vanna", age : 25 , job : "Developer" };
//     // console.log(users);
    
// let count = 0;

// for(let i = 0; i< users.length; i++) {
//     count++;
    
//     console.log(users);
// }



// JSON can't loop , it convert to array first to loop
// [
//     "gh":[
//         {},
//         {}
//     ]
// ]
// 1
//  const name= "John Doe";
// //  2
//  let count = 0;
//  for(let i = 0 ; i < 3; i++) {
//     count ++;
//     console.log(i);
//  }
// //  3
//   const products = ['phone', 'laptop', 'tablet'];

// //   4
//   for(let i=0; i < products.length; i++) {
//     console.log(products[i]);
//   }


// excerise

// if (true) {
//   let a = 10;
//   var b = 20;
//   console.log(a);
  
// }

// console.log(b);


// ex 4
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//       console.log(i);
// }, 1000);
// }