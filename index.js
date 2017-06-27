function changeHeading(ev) {
    //dont let the page refresh before we can see the changes!!
    ev.preventDefault()
    const f = ev.target

    //Grab the string submitted
    const name = f.personName.value

    //Grab the age submitted
    const age = f.age.value

    //Grab the color submitted (if any)
    const color = f.color.value

    const paragraph = document.querySelector('#pstats')
    paragraph.textContent = name + ', ' + age

    paragraph.style.color = color
    paragraph.style.fontSize = "X-Large"
    paragraph.style.fontWeight = "bold"
}

function changetextcolor(ev) {
    ev.preventDefault()
    const f = ev.target


}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)