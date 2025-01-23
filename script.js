const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    addItem()
})

function addItem() {
    const itemList = document.querySelector("ul")
    const newItem = document.createElement("li")
    const itemName = document.createElement("span")
    const deleteIcon = document.createElement("img")

    const itemText = input.value

    deleteIcon.src = "assets/icon-delete.png"
    newItem.classList.add("item")
    itemName.textContent = itemText

    newItem.append(itemName, deleteIcon)
    itemList.append(newItem)

    deleteIcon.addEventListener("click", (ev) => removeItem(ev, itemText))
}

function removeItem(event, itemText) {
    event.preventDefault()
    const clickedItem = event.target.closest(".item")

    console.log(event, clickedItem)

    clickedItem.innerHTML = ""

    const removedItemText = document.createElement("span")
    const xIcon = document.createElement("img")
    const warningIcon = document.createElement("img")

    removedItemText.innerHTML = `<s>${itemText}</s>`
    xIcon.src = "assets/delete-small.png"
    warningIcon.src = "assets/warning.png"

    clickedItem.append(removedItemText, xIcon, warningIcon)
}
