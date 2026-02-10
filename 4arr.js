const arrs = new Array(1,2,3,4,5,6); // arr is special variable
// console.log(arrs);
// console.log(arrs[0]);
// console.log(arrs[1]);
// console.log(arrs[2]);
// console.log(arrs[3]);
// console.log(arrs[4]);

// to clean code or fast excecution we use loop
// for(const arr of arrs){
//     console.log(arr);
// }
// const colors = ["red","green","blue","yellow"];
// for(const color of colors){
//     console.log("Color", color);
// }
// for(let i=0 ; i<colors.length; i++){  
//     console.log("Color with index", i, colors[i], "=============","color",colors[i]);
    
// }
// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(let i=0 ; i<nums.length; i++){  // use i+1 to show 1-based index; const can't be used because i changes
//     console.log("Index", i+1, nums[i]);
// }


// const data = [1,'Apple',4.6,null,undefined]
// console.table(data);

const stand_rows = [
    [1,'A','Apple',4.5],
    [2,'B','Banana',3.5],
]
console.log(stand_rows[1][1]);
for(const row of stand_rows){
    console.log(row[0], row[1], row[2], row[3]);
}

const arr3d = [
    [
        [1,2,3],
        [4,5,6],
    ],
    [
        [7,8,9],
        [10,11,12],
    ]
]
// row index 1, column index 1, depth index 1
console.log(arr3d[1][1][1]);
