const modal = document.getElementById("modal")
const closeButton = document.getElementById("closeButton")

const pElement = document.getElementById("modal-paragraph")
pElement.innerText = "Meu novo paragrafo"

const myDivElement = document.getElementById("my-div")
myDivElement.innerHTML = "<p>Hello</p>"

function openModal() {
  modal.style.display = "block"
}

function closeModal() {
  modal.style.display = "none"
}

closeButton.addEventListener("click", closeModal)

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
})