const mongoose = require("mongoose")
require('dotenv').config()
const mongoUrl = process.env.MONGO_URL_LOCAL

if (!mongoUrl) {
    console.log("MongoDB connection string is undefined. Check your .env file.");
}

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

