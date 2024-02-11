const express = require ('express')
const dotenv = require ('dotenv').config()
const cors = require ('cors')
const port = process.env.PORT || 5000
const {errorHandler} = require ('./middleware/errorMiddleware')
const { connectDB } = require('./config/db')

connectDB()

const app = express()

app.use(cors())
// Adding middleware to use body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/projects', require('./routes/projectsRoute'))
app.use('/api/sendEmail', require('./routes/emailRoute'))

// Overwrite the default handler with custom errorHandler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))