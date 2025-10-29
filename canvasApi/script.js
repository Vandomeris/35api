const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height - 30

let ballRadius = 10

let dx = 2
let dy = -2

let paddleWidth = 75
let paddleHeight = 10
let paddleX = (canvas.width - paddleWidth) / 2

let leftPressed = false
let rightPressed = false

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        leftPressed = true
    } else if (e.key === 'ArrowRight') {
        rightPressed = true
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
        leftPressed = false
    } else if (e.key === 'ArrowRight') {
        rightPressed = false
    }
})

function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.closePath()
}

function drawPaddle() {
    ctx.beginPath()

    ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)

    ctx.closePath()
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawBall()
    drawPaddle()

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    } else if (y + dy < ballRadius) {
        dy = -dy
    }

    if (y + dy > canvas.height - ballRadius) {

        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = - dy
        } else {
            alert('GAme over! Щетько в армии')
            document.location.reload()
            clearInterval(interval)
        }

    }

    if (leftPressed && paddleX > 0) {
        paddleX -= 7
    } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7
    }

    x += dx
    y += dy

}

var interval = setInterval(draw, 10)