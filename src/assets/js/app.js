const form = document.querySelector("#form")
const ul = document.querySelector("ul")
const buttonOpen = document.querySelector(".button-modal")
const buttonClose = document.querySelector(".button-modal-close")
const buttonSubmit = document.querySelector("#submit")
const modal = document.querySelector("dialog")
const textarea = document.querySelector("textarea")

form.onsubmit = event => {
  event.preventDefault()

  const input = form.querySelector("input")
  const value = input.value

  if (value === "") return

  const li = document.createElement("li")
  const span = document.createElement("span")

  span.setAttribute("class", "item-list")
  span.textContent = value
  li.appendChild(span)
  ul.appendChild(li)

  const arr = new Array()

  const ItemValue = document.querySelectorAll(".item-list").forEach(item => {
    arr.push(item.textContent)
  })

  localStorage.setItem("item", JSON.stringify(arr))

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

buttonOpen.onclick = () => {
  modal.showModal()
}

buttonClose.onclick = () => {
  modal.close()
}

function Submit() {
  const condition = textarea.value.length > 10
  const conditionAttribute = textarea.value.length <= 10

  if (condition) {
    return buttonSubmit.removeAttribute("disabled")
  }
  if (conditionAttribute) {
    return buttonSubmit.setAttribute("disabled", true)
  }
}

function getList() {
  const listString = localStorage.getItem("item")
  if (listString) {
    const listObj = JSON.parse(listString)
    let listHTML = ""
    for (var i = 0; i < listObj.length; i++) {
      listHTML += `<li><span>${listObj[i]}</span><button class="delete">X</button></li>`
    }
    ul.innerHTML = listHTML
  }
}

window.addEventListener("load", getList)
