const start = document.getElementById('start')

function getGeolocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords)
        })
    }

}

start.addEventListener('click', () => getGeolocation())