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
    
    deleteIcon.src = "assets/icon-delete.png"  
    newItem.classList.add("item")
    itemName.textContent = input.value
    
    newItem.append(itemName, deleteIcon)
    itemList.append(newItem)
    
        
    deleteIcon.onclick = (event) => {
        event.preventDefault()
        
        newItem.remove()

        function removeMessage() {
            const removedItem = document.createElement("p")
            const xIcon = document.createElement("img")
            const warningIcon = document.createElement("img")
        
            xIcon.src = "assets/delete-small.png"  
            warningIcon.src = "assets/warning.png"  
            removedItem.textContent = "O item foi removido da lista"
            itemList.append(removedItem)
        }
        removeMessage()
    }
}


