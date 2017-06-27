function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const paragraph = document.querySelector('#pstats')
    paragraph.textContent = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)