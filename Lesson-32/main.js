// function mezzene(money1, money2, currency) {
//   let result = money1 + (money2 * currency);
//   console.log(result);

// }


// mezzene(3000, 20, 25)


// function numberToText(num) {
//   if (num.length === 1) {
//     console.log(oneDigit(num));
//   }
//   else if (num.length === 2 && num[1] === "0") {
//     console.log(tenDigit(num[0]));
//   }
//   else if (num.length === 2 && num[1] !== "0") {
//     console.log(tenDigit(num[0]), oneDigit(num[1]));
//   }
// }

// function oneDigit(num) {
//   switch (num) {
//     case "1":
//       return ("Bir");
//     case "2":
//       return ("Iki");
//     case "3":
//       return ("Uc");
//     case "4":
//       return ("Dord");
//     case "5":
//       return ("Bes");
//     case "6":
//       return ("Alti");
//     case "7":
//       return ("Yeddi");
//     case "8":
//       return ("Sekkiz");
//     case "9":
//       return ("Doqquz");

//   }
// }

// function tenDigit(num) {
//   switch (num) {
//     case "1":
//       return ("On");
//     case "2":
//       return ("Iyirmi");
//     case "3":
//       return ("Otuz");
//     case "4":
//       return ("Qırx");
//     case "5":
//       return ("Elli");
//     case "6":
//       return ("Altmış");
//     case "7":
//       return ("Yetmiş");
//     case "8":
//       return ("Seksən");
//     case "9":
//       return ("Doxsan");

//   }
// }


// numberToText("70")




// function isLucky(param) {
//   let strNum = String(param)
//   return +strNum[0] + +strNum[1] + +strNum[2] === +strNum[3] + +strNum[4] + +strNum[5]
// }

// console.log(isLucky(126321));

// function capitalizeWords(text = "Hello my name is Harry") {
//   let word = "";
//   let result = ""
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== " ") {
//       word += text[i]
//     } else {
//       result += word[0].toUpperCase() + word.slice(1) + " "
//       word = ""
//     }
//   }
//   result += word[0].toUpperCase() + word.slice(1)
//   return result
// }
// return text.split(" ").map(item => {
//   return item[0].toUpperCase() + item.slice(1)
// }).join(" ")
// const words = text.split(" ")
// let result = ""
// for (let i = 0; i < words.length; i++) {
//   result += words[i][0].toUpperCase() + words[i].slice(1) + " "
// }
// console.log(result.trim());


// console.log(capitalizeWords('Hello my name is Harry'));


// function isValidNumber(phone) {
//   return phone.length === 11 && phone.startsWith("+7");
// }
// console.log(isValidNumber("+7123456789"));


// function longestWord(text) {
//   let words = text.split(" ");
//   let maxVal = ""
//   for (let i = 0; i <= words.length - 1; i++) {
//     if (words[i].length > maxVal.length) {
//       maxVal = words[i]
//     }
//   }

//   console.log(maxVal);

// }

// longestWord("salam is a powerful language")








// function daysBetweenDates(param1, param2) {
//   let date1 = new Date(param1)
//   let date2 = new Date(param2)

//   return (date2 - date1) / (1000 * 60 * 60 * 24)
// }

// console.log(daysBetweenDates("2025-05-01", "2025-02-10"));



// 1000*60*60*24


// console.log("a".charCodeAt());



// function charCodes(param) {
//   let result = ""
//   for (let i = 0; i < param.length; i++) {
//     if (i !== param.length - 1) {
//       result += param[i].charCodeAt() + ", "
//     } else {
//       result += param[i].charCodeAt()
//     }
//   }

//   return result
// }

// console.log(charCodes("ABC"));



// function factorial(param) {
//   let result = 1
//   for (let i = 1; i <= param; i++) {
//     result *= i
//   }
//   console.log(result);
// }

// factorial(10)


