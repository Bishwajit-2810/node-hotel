const mongoose = require("mongoose")
const mongoUrl = "mongodb://localhost:27017/hotels"

mongoose.connect(mongoUrl)


const db = mongoose.connection;

db.on('connected', () => {
    console.log("Database is connected")
})

db.on('disconnected', () => {
    console.log("Database is disconnected")
})

db.on('error', () => {
    console.log("Database error occurred")
})

module.exports = db;

