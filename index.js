function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value

    const div = document.querySelector('#stats')

    const list = document.createElement('ul')

    renderListItem(list, name, age, color)

    div.appendChild(list)

}

function showcolor(color) {

    //creates the color swatch
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem(list, name, age, color) {

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    list.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '
    colorItem.appendChild(showcolor(color))
    list.appendChild(colorItem)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)