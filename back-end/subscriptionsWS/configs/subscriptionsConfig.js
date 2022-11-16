const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/subscriptionsDB",()=>console.log("Connected to mongodb"))