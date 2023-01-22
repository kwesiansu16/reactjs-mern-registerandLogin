const express = require('express')

const connectDb = require('./config/db')
const authRoute = require('./routes/authRoute')
require('dotenv').config()
//inst

//const cors = require('cors');

const app = express()

// 👇️ configure CORS
//app.use(cors());



const port = 5000
connectDb()
app.use(express.json())
app.use('/auth',authRoute)
app.listen(port,()=>console.log(`Server started on ${port}`));