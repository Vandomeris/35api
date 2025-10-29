// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((data) => {
//         return data.json()
//     })
//     .then((json) => console.log(json))


const list = document.getElementById('list')



const data = await fetch('https://jsonplaceholder.typicode.com/posts')
const json = await data.json()


json.forEach((post) => {
    const element = document.createElement('div')
    element.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `
    list.appendChild(element)
})
