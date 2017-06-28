function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value

    const div = document.querySelector('#stats')

    div.appendChild(renderList(name, age, color))
}

function showcolor(color) {

    //creates the color swatch
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem() {

    const nameItem = document.createElement('li')
    return nameItem

}

function renderList(name, age, color) {

    const list = document.createElement('ul')
    const item = []
    for (i = 0; i < 3; i++) { item[i] = renderListItem() }

    item[0].textContent = `Name: ${name}`
    item[1].textContent = `Age: ${age}`
    item[2].textContent = 'Favorite Color: '
    item[2].appendChild(showcolor(color))

    for (i = 0; i < 3; i++) { list.appendChild(item[i]) }

    return list
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)