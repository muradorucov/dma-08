const message = document.getElementById("message-content");
const duration = document.getElementById("duration");
const cancelable = document.getElementById("cancelable");
const success = document.getElementById("success")
const error = document.getElementById("error")
const addButton = document.getElementById("add-button")
const clearButton = document.getElementById("clear-button")
const toasts = document.querySelector("#toasts");

addButton.addEventListener("click", () => {

  const toast = document.createElement("div");
  toast.className = success.checked ? "success-toast toast" : "error-toast toast";
  
  toast.innerHTML = `<p class="message">${message.value}</p>`
  if (cancelable.checked) {
    toast.innerHTML += `<button class="cancel-button">X</button>`
    toast.lastElementChild.addEventListener("click", () => {
      toast.remove()
    })
  }
  toasts.append(toast);
  let time = setTimeout(() => {
    toast.remove();
    clearTimeout(time)
  }, duration.value);
})
clearButton.addEventListener("click", () => {
  toasts.innerHTML = ""
})