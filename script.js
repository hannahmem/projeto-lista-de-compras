const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    addItem()
})

function addItem(){
    const itemList = document.querySelector("ul")
    const newItem = document.createElement("li")
    const itemName = document.createElement("span")
    const deleteButton = document.createElement("button")
    const deleteIcon = document.createElement("img")
    
    const itemText = input.value

    itemName.textContent = itemText
    newItem.classList.add("item")
    
    deleteButton.id = "remove-button"
    deleteButton.type = "button"

    deleteIcon.src = "assets/icon-delete.png"  
    deleteIcon.id = "delete-icon"
    deleteIcon.alt = "delete icon"

    deleteButton.append(deleteIcon)
    newItem.append(itemName, deleteButton)
    itemList.append(newItem)
    
        
    deleteIcon.onclick = (event) => removedItem(event.target)
}

function removedItem(button) {
    const listItem = button.closest(".item")
    const listTitleElement = listItem.querySelector("span")
    const listTitle = listTitleElement.textContent

    const removalText = document.createElement("span")
    const xIcon = document.createElement("img")
    const warningIcon = document.createElement("img")

    listItem.innerHTML = ""
    removalText.innerHTML = `${listTitle} foi removido`

    warningIcon.src = "assets/warning.png"  
    warningIcon.classList.add("removed-item-icon")
    
    xIcon.src = "assets/delete-small.png"
    xIcon.classList.add("removed-item-icon")

    listItem.append(warningIcon, removalText, xIcon)

    setTimeout(() => {
        listItem.remove()
    }, 4000)

    xIcon.onclick = () => {
        listItem.remove()
    }
}
