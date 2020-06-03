console.log('Client side javascript file loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg1')
const messageTwo = document.querySelector('#msg2')
const icon = document.querySelector('#weathericon')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = ''
                icon.src = ''
                return messageOne.textContent = data.error
            }
            messageOne.textContent = data.location
            icon.src = data.icon
            messageTwo.textContent = data.forecast
        })
    })
})