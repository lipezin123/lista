const form = document.querySelector("#form")
const ul = document.querySelector("ul")

form.onsubmit = event => {
  event.preventDefault()

  const input = form.querySelector("input")
  const value = input.value

  if (value === "") return

  const li = ul.querySelector("li").cloneNode(true)
  li.querySelector("span").textContent = value
  ul.appendChild(li)

  input.value = ""
}

ul.onclick = event => {
  const liCondition = ul.querySelectorAll("li").length <= 1
  if (event.target.classList.contains("delete")) {
    if (liCondition) {
      return alert("Não há mais itens para deletar")
    }
    if (confirm("Deseja deletar esse item?")) {
      event.target.parentElement.remove()
    }
  }
}

const buttonOpen = document.querySelector(".button-modal")
const buttonClose = document.querySelector(".button-modal-close")
const modal = document.querySelector("dialog")

buttonOpen.onclick = () => {
  modal.showModal()
}

buttonClose.onclick = () => {
  modal.close()
}
