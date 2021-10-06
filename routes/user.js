const router = require('express').Router()
const path = require('path')

router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../form.html'))
})

router.get('/contact',(req,res) => {
    res.send('<h1>Contact Us</h1>')
})

router.post('/data',(req,res) => {
    res.send('<h1>Hello from post request</h1>')
})

router.get('/about',(req,res) => {
    res.status(404).json({"msg":"Hello from object"})
})

router.get('/re',(req,res) => {
    res.redirect('/contact')
})

router.post('/getdata',(req,res) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    if(email == 'abcd' && password == '123') {
        res.send('<h1>Sucessfull</h1>')
    }
    else {
        res.send('<h1>Failed</h1>')
    }
    // console.log("hello got data");
    // res.redirect('/contact')
})

module.exports = router