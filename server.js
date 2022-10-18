'use strict';
const http = require('http')

const landingPage = process.env.LANDING_PAGE

if (landingPage === undefined) {
    console.error("env variable LANDING_PAGE not set")
    process.exit(1)
}

const requestListener = function (req, res) {
    if (req.url === '/internal/ok') {
        res.writeHead(200)
        res.end()
    } else {
        res.writeHead(302, {
            'Location': landingPage
        })
        res.end()
    }
}

const server = http.createServer(requestListener)
server.listen(8080)
