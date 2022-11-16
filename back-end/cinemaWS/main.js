const express = require("express")
const app = express()

const cors =require("cors")

app.use(express.json())
app.use(cors())

require("./model/config")

const usersRoute = require("./routes/usersRoute")
app.use("/users",usersRoute)



const subRoute = require("./routes/subscriptionsRoute")
app.use("/subscriptions",subRoute)

const membersRoute = require("./routes/membersRoute")
app.use("/members",membersRoute)

const moviesRoute = require("./routes/moviesRoute")
app.use("/movies",moviesRoute)

const jsonUsersDataRoute = require("./routes/jsonUsersDataRoute")
app.use("/user_data",jsonUsersDataRoute)

const jsonPermissionRoute = require("./routes/jsonPermissionRoute")
app.use("/permissions",jsonPermissionRoute)





app.listen(8001,()=>console.log("http://localhost:8001"))