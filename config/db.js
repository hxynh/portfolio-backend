// Connect to DB

const mongoose = require ('mongoose')
const dotenv = require ('dotenv').config()

console.log(`URI: ${process.env.GMAIL_USER}`)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connection: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }   
}

module.exports = {
    connectDB
}