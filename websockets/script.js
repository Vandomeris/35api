const Status = document.getElementById('status')
const messages = document.getElementById('messages')
const form = document.getElementById('form')
const input = document.getElementById('input')

const ws = new WebSocket('ws://localhost:4000')

ws.addEventListener('open', () => {
    Status.textContent = 'ONLINE'
})

ws.addEventListener('close', () => {
    Status.textContent = 'DISCONNECTED'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    ws.send(input.value)
    input.value = ''
})


function printMessage(message) {
    const li = document.createElement('li')
    li.textContent = message
    messages.appendChild(li)
}


ws.addEventListener('message', (e) => {
    printMessage(e.data)
})

