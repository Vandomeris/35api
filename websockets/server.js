const ws = require('ws')
const port = process.env.PORT || 4000

const server = new ws.Server({ port: port })

server.on('connection', (connect) => {

    connect.on('message', (message) => {

        server.clients.forEach(client => {

            if (client.readyState === ws.OPEN) {
                client.send(message.toString())
            }

        })

    })

})