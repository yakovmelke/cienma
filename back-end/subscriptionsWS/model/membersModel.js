const mongoose = require("mongoose")

const membersSchema = mongoose.Schema({
  name:String,
  email:String,
  city:String
  });
  
  module.exports = mongoose.model("members", membersSchema);