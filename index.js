const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views','views')

app.use('/',userRoutes)

app.get('*',(req,res) => {
    res.send('<h1>Page Not Found</h1>')
})

mongoose.connect('mongodb://localhost:27017/school')
        .then(() => {
            console.log("Database Connected");
                app.listen(8800,() => {
                    console.log("Server Connected at 8800");
                })
        })
        .catch((err) => {console.log(err),process.exit(0);})

