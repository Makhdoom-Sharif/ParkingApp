const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const bookingRoute = require('./routes/booking')
var cors = require('cors')
dotenv.config()



mongoose.connect(
    process.env.MONGOOSE_URL
).then(() => {
    console.log("DB connected")
}).catch((error) => {
    console.log(error)
})
app.use(cors())

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.use('/api/newbooking', bookingRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is runing")
})