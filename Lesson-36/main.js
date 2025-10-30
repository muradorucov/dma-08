// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];


// function printWithIndex(item, index) {
//   console.log(index + " - " + item);
// }

// function printWithHearts(item) {
//   console.log("❤️❤️❤️❤️ " + item + " ❤️❤️❤️❤️");
// }
// function printWithDashes(item) {
//   console.log("-----------");
//   console.log(item);
//   console.log("-----------");
// }
// names.forEach(printWithIndex);
// names.forEach(printWithHearts);
// names.forEach(printWithDashes);


// function kebabToUpper(text) {
//   return text.toUpperCase().split("-").join("_")
//   // return text.toUpperCase().replaceAll("-", "_")
// }


// console.log(kebabToUpper("menim-adim-muraddir"));


// let cut = 0, tek = 0;
// [2, 5, 3, 8, 12, 9, 17, 19].forEach(item => item % 2 === 0 ? cut++ : tek++)
// console.log(cut, tek);


// function countEvensAndOdds() {
//   let cut = 0;
//   let tek = 0;
//   for (let i = 0; i < ededs.length; i++) {
//     if (ededs[i] % 2 === 0) {
//       cut++;
//     } else {
//       tek++;
//     }
//   }
//   return `Massivdə ${cut} cüt və ${tek} tək ədəd var`
// }
// console.log(countEvensAndOdds());





// let arr = ["Ali", "Qafar", "Amir", "Nilufer"]
// let newArr = arr.sort().reverse();
// arr.pop()
// console.log(arr);
// console.log(newArr);


// let arr = [10, 2, 100, 1];

// arr.sort(function (a, b) {
//   return a - b
// })
// arr.sort((a, b) => a - b)
// arr.sort(function (a, b) {
//   if (a > b) {
//     return -1
//   } else if (a < b) {
//     return 1
//   } else {
//     return 0
//   }
// })
// console.log(arr);




// let arr = ["ə", "ı", "ğ", "ş", "ö"]

// arr.sort((a, b) => {
//   return a.localeCompare(b)
// })

// console.log(arr);


// arr.sort()
// console.log(arr);

// let arr = [
//   {
//     age: 20,
//     name: "Qafar"
//   },
//   {
//     age: 31,
//     name: "Fuad"
//   },
//   {
//     age: 24,
//     name: "Altay"
//   }
// ]

// arr.sort((a, b) => {
//   return a.age - b.age
// })

// arr.sort((a, b) => {
//   return b.name.localeCompare(a.name)
// })

// console.log(arr);


// arr.sort()

// let arr = [11, 5, 3, 8, 1, 2];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr); // [1, 2, 3, 5, 8, 11]



// let arr = [10, 3, 467, 4, 5, 6];

// let sum = arr.reduce((acc, item, index, arr) => {
//   return acc += item
// }, 0)

// console.log(arr.reduce((acc, item) => acc += item, 0));

// let sum = 0;
// arr.forEach(item => sum += item)


// let obj = [
//   {
//     category: "phone",
//     count: 2
//   },
//   {
//     category: "computer",
//     count: 4
//   }
// ]

// let products =[]


// let arr = products.reduce((acc, item) => {
//   let foundElem = acc.find(pro => pro.category === item.category);
//   foundElem ? foundElem.count++ : acc.push({
//     category: item.category,
//     count: 1
//   })
//   return acc
// }, [])
// console.log(arr);

// let names = products.reduce((proNames, product) => {
//   proNames.push(product.name)
//   return proNames
// }, [])
// console.log(names);




// let obj = {
//   "0": "Murad",
//   "1": "Ali",
//   "2": "Qafar"
// };


// let arr = [
//   "Murad",
//   "Ali",
//   "Qafar"
// ];


// let user = {
//   "name and surname": "Murad Orucov"
// }

// user["name and surname"]

// Object.

// let product = {
//   title: "Iphone 14",
//   price: 3000,
//   categories: [
//     {
//       id: 1,
//       name: "beatuy"
//     }
//   ],
//   count: 5,
//   colors: ["black", "white", "red"],
// }

// delete product.categories[0]

// product.description = "lorem lorem lroem "

// product.title = "Iphone 16"
// product.price = 6500;
// console.log(product);


// console.log(product.colors[1]);

// console.log(product["title"]);

// console.log(product.title);

// arr[0]
// product["category"]




// speak() {
//   console.log("Salam Millet!");
// }
// speak: () => {
//   console.log("Salam Millet!");
// },
// speak: function() {
//   console.log("Salam Millet!");
// }

// let user = {
//   name: "Ikram",
//   age: 31,
//   setAge: function (newAge) {
//     this.age = newAge
//   },
//   getName: function () {
//     return () => {
//       return this.name
//     }
//   }
// }
// console.log(user.getName());


// user.setAge(32)
// console.log(user);


// String.prototype.salam = () => {
//   console.log(this);
// }


// let str = "Murad"

// str.salam()


// Adınız, cinsiniz və doğum tarixiniz olan user obyekti
// yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.


// let user = {
//   name: "Murad",
//   gender: "Male",
//   birthday: "08.06.2000"
// }

// user.age = 25;
// delete user.birthday;