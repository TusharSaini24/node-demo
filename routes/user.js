const router = require('express').Router()
const path = require('path')

router.get('/',(req,res) => {


    res.render('home',{name:'Aman',arr:['amit','rahul','neha'],isAdmin:false})
    // res.render('home',{obj:{name:'aman',age:21,salary:23000}})
})

router.get('/contact',(req,res) => {
    // res.send('<h1>Contact Us</h1>')
    res.render('form')
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