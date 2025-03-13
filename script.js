const input = document.querySelector("input")
const form = document.querySelector("form")
const itemList = document.querySelector("ul")

const itemsArray = []
const storedItems = JSON.parse(localStorage.getItem("items")) || []

storedItems.forEach((item) => {
    addItem(item)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const itemName = event.target.querySelector("input").value
    addItem({ name: itemName, done: false })
    updateItems()
})

function updateItems() {
    localStorage.setItem("items", JSON.stringify(itemsArray))
}

function addItem(item) {
    try {
        if (itemsArray.some((it) => it.name === item.name)) {
            alert(`${item.name} já existe na lista!`)
            clearForm()
            return
        }
        itemsArray.push(item)
        const itemIdx = itemsArray.length - 1
        console.log(":::", { item, itemsArray, itemIdx })

        const newItem = document.createElement("li")
        const itemName = document.createElement("span")

        const inputDiv = document.createElement("div")
        inputDiv.classList.add("input-group")

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("remove-button")
        deleteButton.type = "button"

        const deleteIcon = document.createElement("img")
        deleteIcon.src = "assets/icon-delete.svg"
        deleteIcon.classList.add("delete-icon")
        deleteIcon.alt = "delete icon"

        const checkbox = document.createElement("input")
        checkbox.classList.add("checkbox")
        checkbox.type = "checkbox"
        checkbox.checked = item.done

        itemName.textContent = item.name
        itemName.classList.add("item-description")
        newItem.classList.add("item")

        deleteButton.append(deleteIcon)
        inputDiv.append(checkbox, itemName)
        newItem.append(inputDiv, deleteButton)
        itemList.append(newItem)

        checkbox.addEventListener("change", (event) => {
            const checkedItem = itemsArray[itemIdx]
            console.log(event.target.checked, checkedItem)
            checkedItem.done = event.target.checked
            updateItems()
        })

        deleteIcon.addEventListener("click", function (event) {
            newItem.classList.add("removal-style")
            removeItem(event.target, item)
            if (itemsArray.length === 0) {
                localStorage.clear()
            }
        })

        updateItems()
        clearForm()
    } catch (error) {
        alert("Impossível adicionar item. Tente novamente!")
        console.log("Erro ao adicionar item.")
        return
    }
}

function removeItem(button, item) {
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

    const index = itemsArray.findIndex((it) => it.name === item.name)
    //   const index = itemsArray.indexOf(item);
    if (index !== -1) {
        itemsArray.splice(index, 1)
        updateItems()
    }

    setTimeout(() => {
        listItem.remove()
    }, 3000)

    xIcon.onclick = () => {
        listItem.remove()
    }
}

function clearForm() {
    input.value = ""

    input.focus()
}
