let users = [
  {
    id: 1,
    name: "Test",
    surname: "User",
    age: 20
  },
  {
    id: 2,
    name: "Test2",
    surname: "User2",
    age: 30
  },
  {
    id: 3,
    name: "Test3",
    surname: "User3",
    age: 40
  },
  {
    id: 4,
    name: "Test4",
    surname: "User4",
    age: 50
  }
]
// const ulList = document.querySelector('ul');


// // foreach
// users.forEach((item) => {
//   ulList.innerHTML += `<li>${item.surname}</li>`
// })
// users.forEach(function () {

// })
// users.forEach(userLoop)

// function userLoop(params) {

// }



// map

// let usersName = users.map((item) => {
//   return {
//     id: item.id,
//     name: item.name
//   }
// })

// console.log(usersName);

// filter

// let filteredUsers = users.filter(x => x.age <= 30)
// console.log(filteredUsers);




// find


// let result = [];

// // result.push(user)


// return result


// const foundUser = users.find(user => user.age === 60)
// console.log(foundUser?.name);

// blog?.title
// reduce


// let result = {}
// Object.keys(result).length ? console.log(result) : console.log("loading...");
// console.log(Object.keys(result));




// result.length ? console.log(result) : console.log("loading....");



// let datas = [
//   {
//     id: "SPLIR",
//     count: 4
//   },
//   {
//     id: "YDTG",
//     count: 5
//   }
// ]



const orders = [
  {
    "id": 10271,
    "customerId": "SPLIR",
    "employeeId": 6,
    "orderDate": "1996-08-01 00:00:00.000",
    "requiredDate": "1996-08-29 00:00:00.000",
    "shippedDate": "1996-08-30 00:00:00.000",
    "shipVia": 2,
    "freight": 4.54,
    "shipName": "Split Rail Beer & Ale",
    "shipAddress": {
      "street": "P.O. Box 555",
      "city": "Lander",
      "region": "WY",
      "postalCode": 82520,
      "country": "USA"
    },
    "details": [
      {
        "productId": 33,
        "unitPrice": 2,
        "quantity": 24,
        "discount": 0
      }
    ]
  },
  {
    "id": 10266,
    "customerId": "WARTH",
    "employeeId": 3,
    "orderDate": "1996-07-26 00:00:00.000",
    "requiredDate": "1996-09-06 00:00:00.000",
    "shippedDate": "1996-07-31 00:00:00.000",
    "shipVia": 3,
    "freight": 25.73,
    "shipName": "Wartian Herkku",
    "shipAddress": {
      "street": "Torikatu 38",
      "city": "Oulu",
      "region": "NULL",
      "postalCode": 90110,
      "country": "Finland"
    },
    "details": [
      {
        "productId": 12,
        "unitPrice": 30.4,
        "quantity": 12,
        "discount": 0.05
      }
    ]
  },
  {
    "id": 10279,
    "customerId": "LEHMS",
    "employeeId": 8,
    "orderDate": "1996-08-13 00:00:00.000",
    "requiredDate": "1996-09-10 00:00:00.000",
    "shippedDate": "1996-08-16 00:00:00.000",
    "shipVia": 2,
    "freight": 25.83,
    "shipName": "Lehmanns Marktstand",
    "shipAddress": {
      "street": "Magazinweg 7",
      "city": "Frankfurt a.M.",
      "region": "NULL",
      "postalCode": 60528,
      "country": "Germany"
    },
    "details": [
      {
        "productId": 17,
        "unitPrice": 31.2,
        "quantity": 15,
        "discount": 0.25
      }
    ]
  },
  {
    "id": 10292,
    "customerId": "TRADH",
    "employeeId": 1,
    "orderDate": "1996-08-28 00:00:00.000",
    "requiredDate": "1996-09-25 00:00:00.000",
    "shippedDate": "1996-09-02 00:00:00.000",
    "shipVia": 2,
    "freight": 1.35,
    "shipName": "Tradiçao Hipermercados",
    "shipAddress": {
      "street": "Av. Inês de Castro 414",
      "city": "Sao Paulo",
      "region": "SP",
      "postalCode": "05634-030",
      "country": "Brazil"
    },
    "details": [
      {
        "productId": 20,
        "unitPrice": 64.8,
        "quantity": 20,
        "discount": 0
      }
    ]
  },
  {
    "id": 10295,
    "customerId": "VINET",
    "employeeId": 2,
    "orderDate": "1996-09-02 00:00:00.000",
    "requiredDate": "1996-09-30 00:00:00.000",
    "shippedDate": "1996-09-10 00:00:00.000",
    "shipVia": 2,
    "freight": 1.15,
    "shipName": "Vins et alcools Chevalier",
    "shipAddress": {
      "street": "59 rue de l'Abbaye",
      "city": "Reims",
      "region": "NULL",
      "postalCode": 51100,
      "country": "France"
    },
    "details": [
      {
        "productId": 56,
        "unitPrice": 30.4,
        "quantity": 4,
        "discount": 0
      }
    ]
  },
  {
    "id": 10313,
    "customerId": "QUICK",
    "employeeId": 2,
    "orderDate": "1996-09-24 00:00:00.000",
    "requiredDate": "1996-10-22 00:00:00.000",
    "shippedDate": "1996-10-04 00:00:00.000",
    "shipVia": 2,
    "freight": 1.96,
    "shipName": "QUICK-Stop",
    "shipAddress": {
      "street": "Taucherstraße 10",
      "city": "Cunewalde",
      "region": "NULL",
      "postalCode": 1307,
      "country": "Germany"
    },
    "details": [
      {
        "productId": 36,
        "unitPrice": 15.2,
        "quantity": 12,
        "discount": 0
      }
    ]
  },
  {
    "id": 10317,
    "customerId": "LONEP",
    "employeeId": 6,
    "orderDate": "1996-09-30 00:00:00.000",
    "requiredDate": "1996-10-28 00:00:00.000",
    "shippedDate": "1996-10-10 00:00:00.000",
    "shipVia": 1,
    "freight": 12.69,
    "shipName": "Lonesome Pine Restaurant",
    "shipAddress": {
      "street": "89 Chiaroscuro Rd.",
      "city": "Portland",
      "region": "OR",
      "postalCode": 97219,
      "country": "USA"
    },
    "details": [
      {
        "productId": 1,
        "unitPrice": 14.4,
        "quantity": 20,
        "discount": 0
      }
    ]
  },
  {
    "id": 10322,
    "customerId": "PERIC",
    "employeeId": 7,
    "orderDate": "1996-10-04 00:00:00.000",
    "requiredDate": "1996-11-01 00:00:00.000",
    "shippedDate": "1996-10-23 00:00:00.000",
    "shipVia": 3,
    "freight": 0.4,
    "shipName": "Pericles Comidas clásicas",
    "shipAddress": {
      "street": "Calle Dr. Jorge Cash 321",
      "city": "México D.F.",
      "region": "NULL",
      "postalCode": 5033,
      "country": "Mexico"
    },
    "details": [
      {
        "productId": 52,
        "unitPrice": 5.6,
        "quantity": 20,
        "discount": 0
      }
    ]
  },
  {
    "id": 10320,
    "customerId": "WARTH",
    "employeeId": 5,
    "orderDate": "1996-10-03 00:00:00.000",
    "requiredDate": "1996-10-17 00:00:00.000",
    "shippedDate": "1996-10-18 00:00:00.000",
    "shipVia": 3,
    "freight": 34.57,
    "shipName": "Wartian Herkku",
    "shipAddress": {
      "street": "Torikatu 38",
      "city": "Oulu",
      "region": "NULL",
      "postalCode": 90110,
      "country": "Finland"
    },
    "details": [
      {
        "productId": 71,
        "unitPrice": 17.2,
        "quantity": 30,
        "discount": 0
      }
    ]
  },
  {
    "id": 10321,
    "customerId": "ISLAT",
    "employeeId": 3,
    "orderDate": "1996-10-03 00:00:00.000",
    "requiredDate": "1996-10-31 00:00:00.000",
    "shippedDate": "1996-10-11 00:00:00.000",
    "shipVia": 2,
    "freight": 3.43,
    "shipName": "Island Trading",
    "shipAddress": {
      "street": "Garden House Crowther Way",
      "city": "Cowes",
      "region": "Isle of Wight",
      "postalCode": "PO31 7PJ",
      "country": "UK"
    },
    "details": [
      {
        "productId": 35,
        "unitPrice": 14.4,
        "quantity": 10,
        "discount": 0
      }
    ]
  },
  {
    "id": 10336,
    "customerId": "SPLIR",
    "employeeId": 7,
    "orderDate": "1996-10-23 00:00:00.000",
    "requiredDate": "1996-11-20 00:00:00.000",
    "shippedDate": "1996-10-25 00:00:00.000",
    "shipVia": 2,
    "freight": 15.51,
    "shipName": "Princesa Isabel Vinhos",
    "shipAddress": {
      "street": "Estrada da saúde n. 58",
      "city": "Lisboa",
      "region": "NULL",
      "postalCode": 1756,
      "country": "Portugal"
    },
    "details": [
      {
        "productId": 4,
        "unitPrice": 17.6,
        "quantity": 18,
        "discount": 0.1
      }
    ]
  },
  {
    "id": 10349,
    "customerId": "SPLIR",
    "employeeId": 7,
    "orderDate": "1996-11-08 00:00:00.000",
    "requiredDate": "1996-12-06 00:00:00.000",
    "shippedDate": "1996-11-15 00:00:00.000",
    "shipVia": 1,
    "freight": 8.63,
    "shipName": "Split Rail Beer & Ale",
    "shipAddress": {
      "street": "P.O. Box 555",
      "city": "Lander",
      "region": "WY",
      "postalCode": 82520,
      "country": "USA"
    },
    "details": [
      {
        "productId": 54,
        "unitPrice": 5.9,
        "quantity": 24,
        "discount": 0
      }
    ]
  },
  {
    "id": 10331,
    "customerId": "BONAP",
    "employeeId": 9,
    "orderDate": "1996-10-16 00:00:00.000",
    "requiredDate": "1996-11-27 00:00:00.000",
    "shippedDate": "1996-10-21 00:00:00.000",
    "shipVia": 1,
    "freight": 10.19,
    "shipName": "Bon app'",
    "shipAddress": {
      "street": "12 rue des Bouchers",
      "city": "Marseille",
      "region": "NULL",
      "postalCode": 13008,
      "country": "France"
    },
    "details": [
      {
        "productId": 54,
        "unitPrice": 5.9,
        "quantity": 15,
        "discount": 0
      }
    ]
  }
]
// let result = []

// orders.forEach(order => {

//   const foundID = result.find(item => item.customerId === order.customerId)
//   if (!foundID) {
//     result.push({
//       customerId: order.customerId,
//       count: 1
//     })
//   } else {
//     foundID.count++
//   }

// })
// let result = orders.reduce((acc, order) => {
//   const foundCity = acc.find(item => item.city === order.shipAddress.city)
//   !foundCity ? acc.push({
//     city: order.shipAddress.city,
//     count: 1
//   }) : foundCity.count++;

//   return acc
// }, [])

// console.log(result);




// const h1Elem = document.querySelector(".item-1");
// // h1Elem.innerHTML;
// // h1Elem.innerText;
// // h1Elem.textContent;
// // h1Elem.style.color = "red";
// const pElem = document.createElement("p")
// pElem.innerText = "Lorem lorem text";


// const divElem = document.querySelector("div.text")
// divElem.append(pElem)
// console.log(divElem);

// h1Elem.remove()



// const li = document.querySelector("ul li:nth-child(2)")
// li.className += " item2"
// console.log(li);
// li.classList.add("item-2", "item-5")
// // li.classList.add("item-5")
// li.classList.remove("item-2")
// li.classList.replace("item","test")

// li.addEventListener("click", () => {
//   // li.classList.toggle("active")
//   // if (li.classList.contains("active")) {
//   //   li.classList.remove("active")
//   // } else {
//   //   li.classList.add("active")
//   // }
// })
// console.log(li.classList.contains("item"));

// console.log(li.classList);
// console.log(li.className);







// classList => add, remove,contains,toggle,

// const list = document.querySelectorAll("li");
// list.forEach(li => {
//   li.addEventListener("click", () => {

//     list.forEach(item => item.classList.remove("active"))

//     li.classList.add("active")
//   })
// })



// const list = document.querySelectorAll("li");
// list.forEach(item => {
//   item.classList.add("item")
//   item.classList.toggle("secondary", !item.classList.contains("primary"));
// })




// TASK-1
// HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.

// const firstElem = document.querySelector("ul li:nth-child(1)")
// console.log(firstElem);


// TASK-2
// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .

// const headElem = document.querySelector("h1");
// headElem.remove();
// const newElem = document.createElement("li");
// newElem.textContent = "TITAN RTX";
// const list = document.querySelector("ul");
// list.append(newElem);

// TASK-3
// - başlıq mətnini «GeForce 20 Series» -a;
// - fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

// document.querySelector("h1").innerText = "GeForce 20 Series";

// function changebg() {
//   document.querySelectorAll(".primary").forEach(a => {
//     a.style.backgroundColor = "#ebebeb";
//   });
// }

// changebg()



// const h1 = document.querySelector("h1");
// h1.innerText = "GeForce 20 Series"
// // h1.remove();


// const newLi = document.createElement("li");
// newLi.innerText = "Titan RTX";

// document.querySelector("ul").append(newLi)

// const list = document.querySelectorAll("li");

// list.forEach(li => li.classList.contains("primary") && (li.style.background = "#ebebeb"))

// const list = document.querySelectorAll("li.primary");
// list.forEach(li=> console.log(li))

const list = document.querySelectorAll("li");
list.forEach(li => {
  li.classList.add("item")
  li.classList.toggle("secondary", !li.classList.contains("primary"))

  // if (!li.classList.contains("primary")) {
  //   li.classList.add("secondary")
  // }
})