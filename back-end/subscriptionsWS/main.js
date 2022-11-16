const express = require("express")
const app = express()

const cors =require("cors")

app.use(cors())
app.use(express.json())
 

require("./configs/subscriptionsConfig")

const subscriptionsRouter = require("./routes/subscriptionsRouter")
app.use("/subscriptions",subscriptionsRouter)

const membersRouter = require("./routes/membersRouter")
app.use("/members",membersRouter)

const moviesRouter = require("./routes/moviesRouter")
app.use("/movies",moviesRouter)


app.listen("8000",()=>console.log("http://localhost:8000"))

