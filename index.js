const express = require('express')
const app = express()
const path = require('path')


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'home.html'))
})

app.get('/contact',(req,res) => {
    res.send('<h1>Contact Us</h1>')
})

app.post('/data',(req,res) => {
    res.send('<h1>Hello from post request</h1>')
})

app.get('/about',(req,res) => {
    res.status(404).json({"msg":"Hello from object"})
})

app.get('/re',(req,res) => {
    res.redirect('/contact')
})

app.get('*',(req,res) => {
    res.send('<h1>Page Not Found</h1>')
})


app.listen(8800,() => {
    console.log("Server Connected");
})