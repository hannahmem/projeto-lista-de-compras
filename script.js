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
    const deleteIcon = document.createElement("img")
    
    const itemText = input.value

    deleteIcon.src = "assets/icon-delete.png"  
    newItem.classList.add("item")
    itemName.textContent = itemText
    
    newItem.append(itemName, deleteIcon)
    itemList.append(newItem)
    
        
    deleteIcon.onclick = (event) => removedItem(event)
}

function removedItem(event) {
    event.preventDefault()

    const clickedItem = event.target.closest(".item")
    clickedItem.innerHTML = ""

    const removedItem = document.createElement("span")
    const xIcon = document.createElement("img")
    const warningIcon = document.createElement("img")

    removedItem.innerHTML = "O item foi removido da lista"
    xIcon.src = "assets/delete-small.png"  
    warningIcon.src = "assets/warning.png"  
    clickedItem.append(removedItem, warningIcon, xIcon)
}
