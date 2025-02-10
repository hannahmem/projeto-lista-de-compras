const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    addItem()
})

function addItem(){
    try {
        const itemList = document.querySelector("ul")
        const newItem = document.createElement("li")
        const itemName = document.createElement("span")
        const inputDiv = document.createElement("div")
        const deleteButton = document.createElement("button")
        const deleteIcon = document.createElement("img")
        const checkbox = document.createElement("input")
        
        const itemText = input.value
        
        inputDiv.classList.add("input-group")
    
        checkbox.id = "checkbox"
        checkbox.type = "checkbox"
        
        itemName.textContent = itemText
        itemName.classList.add("item-description")
        newItem.classList.add("item")
        
        deleteButton.id = "remove-button"
        deleteButton.type = "button"
        
        deleteIcon.src = "assets/icon-delete.svg"  
        deleteIcon.id = "delete-icon"
        deleteIcon.alt = "delete icon"
        
        deleteButton.append(deleteIcon)
        inputDiv.append(checkbox, itemName)
        newItem.append(inputDiv, deleteButton)
        itemList.append(newItem)
        
        deleteIcon.addEventListener("click", function (event) {
            newItem.id = "removal-style"
            removedItem(event.target)
        })
        clearForm()
    } catch (error) {
        console.log("Impossível adicionar item. Tente novamente!")
    }
}

function removedItem(button) {
    const listItem = button.closest(".item")
    const listTitleElement = listItem.querySelector("span")
    const listTitle = listTitleElement.textContent
    
    const removeDiv = document.createElement("div")
    const removalText = document.createElement("span")
    const xIcon = document.createElement("img")
    const warningIcon = document.createElement("img")

    removeDiv.classList.add("input-group")

    listItem.innerHTML = ""
    removalText.innerHTML = `${listTitle} foi removido da lista`

    warningIcon.src = "assets/warning.svg"
    
    xIcon.src = "assets/delete-small.svg"
    xIcon.classList.add("removed-item-icon")

    removeDiv.append(warningIcon, removalText)
    listItem.append(removeDiv, xIcon)

    setTimeout(() => {
        listItem.remove()
    }, 4000)

    xIcon.onclick = () => {
        listItem.remove()
    }
}

function clearForm() {
    input.value = ""
}