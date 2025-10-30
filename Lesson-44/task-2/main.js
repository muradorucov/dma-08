const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal")
openBtn.addEventListener("click", () => modal.style.display = "flex")
closeBtn.addEventListener("click", () => modal.style.display = "none")
modal.addEventListener("click", (e) => {
  console.log(e);
  
  if (e.target === modal) {
    modal.style.display = "none"
  }
})