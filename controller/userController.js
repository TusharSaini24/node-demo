exports.home = (req,res) => {
    res.render('home',{name:'Aman',arr:['amit','rahul','neha'],isAdmin:false})
    // res.render('home',{obj:{name:'aman',age:21,salary:23000}})
}

exports.form = (req,res) => {
    // res.send('<h1>Contact Us</h1>')
    res.render('form')
}