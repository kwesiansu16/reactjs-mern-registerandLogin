const mongoose = require('mongoose')
//Getting constant of require mongooses


//Checking database connection from mongodb
const connectDb = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        if(con){
            //connection successful code
            console.log("Mongo connected successfully")
          
        }
        else{
            //no connection successful
            console.log("Please try again")
        }
    }
    catch(error){
console.log("Something went wrong")
process.exit()
    }
}
module.exports = connectDb