const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name : {
        type:String,
        required:true,
        trim:true
    },
    age : {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Student',studentSchema)