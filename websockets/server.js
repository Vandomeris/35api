const ws = require('ws')

const server = new ws.Server({ port: 3000 })

server.on('connection', (connect) => {

    connect.on('message', (message) => {

        server.clients.forEach(client => {

            if (client.readyState === ws.OPEN) {
                client.send(message.toString())
            }

        })

    })

})