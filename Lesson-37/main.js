// let obj = {
//   name: "Knyaz",
//   speak() {
//     this
//   },
//   test: {
//     run() {
//       console.log(this);
//     }
//   },
//   hobbies: [
//     {
//       id: "1",
//       run() {
//         console.log(this);
//       }
//     },
//     {
//       id: "2",
//       run() {
//         console.log(this);
//       }
//     }
//   ]
// }

// obj.hobbies[0].run()

// obj.test.run()







// const client = {
//   fullName: "Fuad Memmedov",
//   balans: -1000,
//   creditLimit: 1000,
//   precentOfMinPayment: 5,
//   getBalance() {
//     if (this.balans >= 0) {
//       return `Balansınız ${this.balans} AZN`
//     } else {
//       return `Borucunuz ${-1 * this.balans} AZN`
//     }
//   },
//   getMinPaymant() {
//     if (this.balans >= 0) {
//       return "Sizin borcunuz yoxdur"
//     } else {
//       let minPay = (-1 * this.balans * this.precentOfMinPayment) / 100;
//       return `Minimum ödənişiniz ${minPay} AZN`
//     }
//   },
//   withdraw(amount) {
//     if (amount <= this.balans) {
//       this.balans -= amount
//     } else if (amount <= this.balans + this.creditLimit) {
//       this.balans -= amount;
//       this.creditLimit += this.balans
//     } else {
//       console.log("Balans və kredit limit kifayət deyil!");
//     }
//   },
//   refill(amount) {
//     if (this.balans >= 0) {
//       this.balans += amount
//     } else {
//       if (amount <= Math.abs(this.balans)) {
//         this.balans += amount;
//         this.creditLimit += amount
//       } else if (amount > Math.abs(this.balans)) {
//         this.creditLimit += Math.abs(this.balans);
//         this.balans += amount
//       }
//     }
//   }
// }


// client.withdraw(4300)
// client.refill(500)
// console.log(client.getBalance())
// console.log(client.getMinPaymant())


// let calc = {
//   memo: 0,
//   toplama(a, b) {
//     return a + b
//   },
//   cimxa(a, b) {
//     return a - b
//   },
//   save(value) {
//     this.memo = value
//   },
//   clearMemo() {
//     this.memo = 0
//   },
//   getMemo() {
//     return this.memo
//   }
// }


// calc.save(calc.toplama(10, 16))
// console.log(calc.getMemo());
// calc.clearMemo()
// console.log(calc.getMemo());



// function mostFrequent(text) {
//   let arr = text.split(", ");
//   let obj = {}


//   arr.forEach(sy => {
//     if (obj[sy]) {
//       obj[sy]++;
//     } else {
//       obj[sy] = 1
//     }
//   });


//   let keys = Object.keys(obj)
//   let result = keys[0];
//   keys.forEach(key => {
//     if (obj[key] > obj[result]) {
//       result = key
//     }
//   })
//   return result
// }

// console.log(mostFrequent("a, v, v, v, a, b, a, a, b, c"));


// let arr = 4

// const obj = {
//   id: +arr
// }


// obj.id = "jgf";

// console.log(obj);


// const { title, description, category, hobbies: { title: title1, name } } = {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   "hobbies": {
//     title,
//     name
//   },
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "discountPercentage": 10.48,
//   "rating": 2.56,
//   "stock": 99
// }

// const [first] = [1, 3, 4, 5]


// console.log(title);



// let obj = {
//   test: "Test"
// }

// let jbo = { ...obj };
// let jbo = structuredClone(obj);

// jbo.test = "Run"


// console.log(obj);
// console.log(jbo);


// console.log(document);
// console.log(window);


// CRUD

// const h1elem = document.querySelector("h1");
// h1elem.onclick = function () {
//   document.body.style.background = "red"
// }
// console.log(h1elem);

// const newDiv = document.createElement("div")
// newDiv.innerText = "Yeni element!"
// document.body.append(newDiv)
// newDiv.style.background = "red";
// newDiv.style.color = "#fff";
// newDiv.style.fontSize = "45px";
// newDiv.style.textShadow = "10px 10px 10px black"
// newDiv.style.padding = "10px"
// newDiv.remove()


// console.log(newDiv);

