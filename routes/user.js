const router = require('express').Router()
const path = require('path')
const multer  = require('multer')

const Student = require('../models/student')
const userController = require('../controller/userController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    //   cb(null, file.originalname + '.' + file.mimetype.split('/')[1])
    }
  })
  
const upload = multer({ storage: storage })

router.get('/',userController.home)

router.get('/form', userController.form)

router.post('/data',(req,res) => {
    res.send('<h1>Hello from post request</h1>')
})

router.get('/about',(req,res) => {
    res.status(404).json({"msg":"Hello from object"})
})

router.get('/re',(req,res) => {
    res.redirect('/contact')
})

router.post('/getdata',upload.single('fufile'),(req,res) => {
    console.log(req.body);
    console.log(req.file);
    // let email = req.body.email;
    // let password = req.body.password;
    // if(email == 'abcd' && password == '123') {
    //     res.send('<h1>Sucessfull</h1>')
    // }
    // else {
    //     res.send('<h1>Failed</h1>')
    // }
    // console.log("hello got data");
    // res.redirect('/contact')
})

router.get('/addinfo',(req,res) => {
  res.render('infoform')
})

router.post('/saveinfo',async (req,res) => {
  // console.log(req.body);
  let name = req.body.name
  let age = req.body.age
  let sal = req.body.sal

  var data = {name,age,salary:sal}

  const result = await Student(data).save()
  console.log(result);

})

module.exports = router