// function greet(name) {
//     return "Hello" + name;
// }
// console.log(greet("ne"));


// Global Scope
// function greet() {
//   console.log("Hello");
//   return "hi";
// }
// greet();
// console.log(greet());


// inside other function

// function parent(){
//     function child(){
//         console.log("Hello from child function");
//     }
//     child();

// }
// parent();

//  function inside object
// const user = {
//     name : "Vanna",
//     greet: function(){
//         console.log("Hello" + this.name);
        
//     }
// }
// user.greet();


// type of function

//1. Function Declaration

// function greet(name){
//     return "hello " + name;
// }
// console.log(greet("Vanna"));


// // 2. Function Expression : oy domlai k bn ot k bn 
// const greet1 = function(name){
//     return "Hello " + name;
    
// }
// console.log(greet1(2+1));


// // 3. Arrow Function

// const greet2 = (name) =>`Hello ${name} `;
// console.log(greet2("Vanna")); 

// //  parameters and Return

// function multiple(a,b){
//     return a * b;
// }
// console.log(multiple(2,3));

// //  no return , no para

// function sayHi(){
//     console.log("Hi");
    
// }
// sayHi();

// const users = [
//     {
//         name : "sreyne", age : 22
//     },
//     {
//         name :"Ela" , age : 30
//     }
// ]

// function getAdults(arr){
//     return arr.filter(user => user.age <=22)
// }
// console.log(getAdults(users));

function sayHello(name){
    return "hello," + ' ' + name;
    
}
console.log(sayHello("Vanna"));

    
function sum(a,b){
    return a + b;
}
console.log(sum(5,10 ));

