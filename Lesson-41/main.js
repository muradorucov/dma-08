// const todoInput = document.getElementById("todoInput");
// const todosElem = document.getElementById("todosElem");
// const localData = JSON.parse(localStorage.getItem("todos"))
// let todos = localData ? localData : []
// todos && todos.forEach(todo => {
//   todosElem.innerHTML += `
//      <li class="shadow-md rounded-md p-[7px_10px]">${todo}</li>
//     `
// })


// todoInput.addEventListener("keyup", (event) => {
//   if (todoInput.value.trim() && event.key === "Enter") {
//     todos.push(todoInput.value.trim());
//     localStorage.setItem("todos", JSON.stringify(todos))
//     todoInput.value = ""
//     todosElem.innerHTML = ""
//     todos.forEach(todo => {
//       todosElem.innerHTML += `
//      <li class="shadow-md rounded-md p-[7px_10px]">${todo}</li>
//     `
//     })
//   }

// })