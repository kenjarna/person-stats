function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.age.value
    const paragraph = document.querySelector('#pstats')
    paragraph.textContent = name + ', ' + age
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)