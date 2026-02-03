// const arr = [1, 2, 3,5,4];
// add to end
// arr.push(4);
// console.log(arr);

// remove from end
// arr.pop();
// console.log(arr);

// add to start 
// arr.unshift(2); // why when add num 1 it show like not correct?
// console.log(arr);

// remove from start    
// arr.shift();
// console.log(arr);   


// remove from middle
// arr.splice(1,2); // it mean remove index 1 and 2
// console.log(arr);

// arr.splice(1,2, 'a','b'); 
// console.log(arr); // it mean remove index 1 and 2 and add 'a' and 'b' in that place


// arr.sort((a, b) => b - a);  //when check exmple I'm not understand yet
// console.log(arr);

// arr.reverse();
// console.log(arr);

// const result = arr.map(x => x * 2);

// arr.forEach(x => x * 2);
// console.log(arr);

// const users = [
//   { id: 1, name: "Vanna" },
//   { id: 2, name: "Sreyne" }
// ];

// const names = users.map(u => ({
//     id: u.id,
//     name: u.name
// }));

// console.log(names);
// ["Vanna", "Sreyne"]


const arr = [2, 4, 6, 8,8, 10];

// const result = arr.filter(x => x > 5);
// console.log(result);
// [6, 8, 10]
//  const sum = arr.reduce((total, x) => total + x, 0);
// console.log(sum); //30

const hasTwo = arr.includes(2);
console.log(hasTwo);

const found = arr.find(x => x > 5);
console.log(found);

const part = arr.slice(1, 4); // slick(start, end)
console.log(part);

const merge = arr.concat([12, 14, 16]);
console.log(merge);

const join = arr.join('-');
console.log(join);
console.log(arr.toString());
// 👉 "1,2,3,6,8"
arr.forEach(x => {
  console.log(x * 2);
});