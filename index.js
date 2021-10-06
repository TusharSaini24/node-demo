const express = require('express')
const app = express()
const path = require('path')

const userRoutes = require('./routes/user')

app.use(express.urlencoded({extended:false}))

app.use('/',userRoutes)

app.get('*',(req,res) => {
    res.send('<h1>Page Not Found</h1>')
})

app.listen(8800,() => {
    console.log("Server Connected");
})