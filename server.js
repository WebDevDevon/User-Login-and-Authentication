const express = require('express')
const connectDB = require('./db')
const app = express()
const PORT = 8000

connectDB()

app.use(express.json())

const server = app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

process.on('unhandledRejection', err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})