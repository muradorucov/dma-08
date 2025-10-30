// property
// method


// let str = "        Al t   at yt             ";
// str.length
// str.indexOf("y")
// str.toUpperCase()
// str.toLowerCase()
// str.split("t") //["A","l","t","a","y"] //["Al","ay"]
// console.log(str.slice(-1));

// str.includes("l")
// console.log(str.search("l"));

// str.charAt()
// str[6]

// str.lastIndexOf()

// str.replace("t", "d")
// console.log(str.replaceAll(str[5], "d"));



// console.log(str.startsWith("Bl"));

// console.log(str.substring(0, -1));

// console.log(str.repeat(4));

// console.log(str.trim());





// let weekDay = "3";
// if (weekDay === "1") {
//   console.log("Bazarertesi");
// } else if (weekDay === "2") {
//   console.log("Chershenbe axshami");
// } else if (weekDay === "3") {
//   console.log("Chershenbe");
// } else if (weekDay === "4") {
//   console.log("Cume axshami");
// } else if (weekDay === "5") {
//   console.log("Cume");
// } else if (weekDay === "6") {
//   console.log("Shenbe");
// } else if (weekDay === "7") {
//   console.log("Bazar");
// } else {
//   console.log("Yanlish deyer daxil edilib!");
// }






// switch (true) {
//   case weekDay > "1":
//     console.log("Bazarertesi");
//     break;
//   case weekDay === "2":
//     console.log("Chershenbe axshami");
//     break;
//   case weekDay === "3":
//     console.log("Chershenbe");
//     break;
//   default:
//     console.log("Yanlish deyer daxil edilib!");
// }



// let a = 10;


// if (a > 0) {
//   console.log("A musbetdir");
// } else if (a < 0) {
//   console.log("A menfidir");
// } else {
//   console.log("A sifirdir");
// }


// a > 0 ? console.log("A musbetdir") : a < 0 ? console.log("A menfidir") : console.log("A sifirdir");


// a > 0 ? "" : ""


// 3
// 4
// 5
// 8
// 3iki

// 39

// let value = 20

// console.log(value < 15);
// console.log(value === 10);



// let age = "17" //prompt("Yashiniz daxil edin", "17")

// if (age >= 18) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }


// let numbers = "3,6,9" // [3,6,9]
// let ededler = numbers.split(",").map(Number);
// let bir = ededler[0];
// let iki = ededler[1]
// let uc = ededler[2]
// if (bir === iki || iki === uc || bir === uc) {
//   console.log("Eyni ededleri daxil etmeyin");

// } else {
//   ededler.sort((a, b) => a - b);
//   console.log("Ortancil eded ", ededler[1]);
// }

// let input = prompt("3 ikireqemli eded daxil edin boşluqla ayirin");
// let numbers = input.split(" ").map(Number);//[3, 6, 8]

// if (numbers.length !== 3) {
//   console.log("xeta: Deqiq 3 eded daxil edin");
// } else {
//   let [a, b, c] = numbers;

//   if (a === b || b === c || a === c) {
//     console.log("xeta: ededler eyni ola bilmez");
//   } else {
//     let orta = a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
//     console.log("ortancil eded: " + orta);
//   }
// }




// "45,78,34"
// "45,34,78"
// "34,45,78"
// "78,45,34"
// "78,34,45"
// "34,78,45"
// let [num1, num2, num3] = nums


// let nums = "45,78,34".split(",")
// let num1 = nums[0];
// let num2 = nums[1];
// let num3 = nums[2];


// if (num1 > num3 && num1 < num2 || num1 < num3 && num1 > num2) {
//   console.log(num1);
// } else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
//   console.log(num2);
// } else if (num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2) {
//   console.log(num3);
// } else {
//   console.log("Yanlish deyer!");
// }



// let value = "M" //prompt("M ve F daxil edin")

// let gender = value === "M" ? "Male" : value === "F" ? "Female" : null



// let a = 6, b = 4, c = 2;

// let x = ++a - b-- + c++ - --b + a++;
// let y = a-- + --c - ++b + x++ - --a;

// console.log(a = 6, b = 3, c = 2, x, y);


// 6,3,2,11,11
// 6,3,2,11,11
// 6,3,2,14,14
// 

// let num = 3.5
// console.log(Math.trunc(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));


// Math.round()
// Math.floor()
// Math.ceil()
// Math.trunc()
// Math.sqrt()
// Math.abs()

// Math.max(5,6,6,78)
// Math.min(5,6,7,89)
// Math.pow(4,6)

// 4**6


let randomNUm = Math.floor(Math.random() * 100)

if (randomNUm <= 50) {
  console.log(randomNUm);
}
