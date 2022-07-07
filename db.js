const Mongoose = require("mongoose")
const RemoteDB = process.env.DB_String
const connectDB = async () => {
    Mongoose.connect(RemoteDB)
    .then(client => {
        console.log('Connected to Database')
    })
}
module.exports = connectDB
require('dotenv').config()