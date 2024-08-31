const valueArray = []

const form = document.getElementById('form')
const inputValue = document.getElementById('inputValue')
const valueList = document.getElementById('valueList')

function addValue(){
    const value = inputValue.value.trim()
    if (value && !valueArray.includes(value)) {
        valueArray.push(value)
        valueArray.sort()
        updateList()
        inputValue.value = ''
    }
}

function updateList(){
    valueList.innerHTML = ''
    valueArray.forEach(value => {
        const listItem = document.createElement('li')
        listItem.textContent = value
        valueList.appendChild(listItem)
    })
}

form.addEventListener('submit',(event) => {
    event.preventDefault()
    addValue()
})