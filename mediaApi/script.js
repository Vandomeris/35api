const video = document.getElementById('video')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const Stop = document.getElementById('stop')
const volume = document.getElementById('volume')
const seek = document.getElementById('seek')
const fullScreen = document.getElementById('fullscreen')
const mute = document.getElementById('mute')



let isMuted = false

play.addEventListener('click', () => {
    video.play()
})

pause.addEventListener('click', () => {
    video.pause()
})

Stop.addEventListener('click', () => {
    video.pause()
    video.currentTime = 0
})

volume.addEventListener('input', (e) => {
    video.volume = e.target.value / 100
})
// duration

seek.addEventListener('input', (e) => {
    video.currentTime = video.duration * (e.target.value / 100)
})

fullScreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen()
    } else {
        document.exitFullscreen?.()
    }
})

mute.addEventListener('click', () => {
    if (isMuted) {
        video.muted = false
        isMuted = false
        mute.textContent = 'Выключить звук'
    } else {
        video.muted = true
        isMuted = true
        mute.textContent = 'Включить звук'
    }
})