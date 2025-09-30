const input = document.getElementById('input')

input.addEventListener('change', (event) => {
    sessionStorage.setItem('text', event.target.value)
})

if (sessionStorage.getItem('text')) {
    input.value = sessionStorage.getItem('text')
}