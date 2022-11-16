const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
_id:String,    
userName:String,
password:String
})

module.exports = mongoose.model("users",usersSchema)