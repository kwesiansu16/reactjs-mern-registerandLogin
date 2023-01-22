const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
user:{
    type:String,
    trim:true,
    required:true
},
email:{
    type:String,
    trim:true,
    required:true,
},
password:{
    type:String,
    trim:true,
    required:true
},



},
{
    timestamps:true,
}
)
const User = mongoose.model('user',userSchema)

module.exports = User;