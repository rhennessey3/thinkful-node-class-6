const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(morgan('dev'))

server.use((req, res) => {
    res.send('Hello, world!')
})

const PORT = 8000

server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})