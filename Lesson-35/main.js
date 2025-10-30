// foreach

// let arr = ["Ali", "Amir", "Davud", "Knyaz", "Fuad", "Günay"];
// arr.forEach(function (param1) {
//   document.writeln(param1);
// })
// arr.forEach((item, index, array) => console.log(item, index, array))
// console.log(arr);


// for (let i = 0; i < arr.length; i++)
//   document.writeln(arr[i])


// document.writeln(arr[0])
// document.writeln(arr[1])
// document.writeln(arr[2])
// document.writeln(arr[3])



// map
// let arr = ["Ali", "Amir", "Davud", "Knyaz", "Fuad", "Günay"];

// //? let newArr = arr.map((item) => {
// //?   return item.toUpperCase()
// //? })
// let newArr = arr.map((item, index) => item.toUpperCase() + (index + 1))

// let newArr = arr.map((item, index, arr) => {
//   return item.toUpperCase() + (index + 1)
// })

// let newArr = []
// arr.forEach((item) => {
//   newArr.push(item.toUpperCase())
// })

// let price = [10, 108, 114, 890, 400, 34, 56]
// let newArr = price.map(item => item + (item * 18 / 100))


// console.log("OldArr", price);
// console.log("newArr", newArr);



// find

// let arr = ["Ali", "Amir", "Davud", "Kinyaz", "Fuad", "Günay"];

// let foundUser = arr.find(user => {
//   if (user.length === 6) {
//     return true
//   }
// })
// let foundUser = arr.find(user => user.length === 6)

// console.log(foundUser);

// let foundUser;
// arr.forEach(user => {
//   if (user.length === 17) {
//     foundUser = user;
//   }
// })

// console.log(foundUser);



// filter
// let arr = ["Ali", "Amir", "Abdulrahman", "Knyaz", "Fuad", "Günay"];

// let newArr = arr.filter(user => user.toLowerCase().includes("a"))

// let newArr = [];

// arr.forEach(user => user.length === 2 && newArr.push(user))

// console.log(newArr);







// shallow clone  && deep clone
// let arr = ["Ali", "Amir", "Abdulrahman", "Knyaz", "Fuad", "Günay", [19, 20, 21, 23]];

// const text = JSON.stringify(arr)
// const jsObj = JSON.parse(text)

// jsObj[6].pop()
// console.log(arr);
// // console.log(text);
// console.log(jsObj);

// console.log(text.toLowerCase());


// let newArr = arr
// let newArr = [...arr]
// let newArr = structuredClone(arr)

// JSON

// Text format

// console.log(...arr);


// newArr.pop()
// newArr[6].pop()

// console.log("OldArr", arr);
// console.log("newArr", newArr);



// let newArr = [];


// arr.forEach(item=> newArr.push(item))
// let newArr = arr.map(item => item)







// spread, rest,destruction

// let [num1, num2, num3] = [1, 2, 34, 5, 67]



// console.log(num3);

// const firstNum = arr[0];
// const secondNum = arr[1];

// const [_, __, ___, ...other] = arr;
// // console.log(firstNum);
// console.log(other);



// console.log(...arr);
