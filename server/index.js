const dotenv = require("dotenv").config()
const express = require("express")
const connect = require("./config/data")
const app = express()
const userLoginRoute = require("./routes/userLogin.route")
const userRegisterRoute = require("./routes/userRegister.route")
const protectedRoutes = require("./routes/protectedRoutes")
const cors = require("cors");
const PORT = process.env.PORT || 3000
app.use(express.json())

app.get("/", (req, res) => {
     res.send("Hello From Index.js")
})

app.use(cors())
app.use("/user", userLoginRoute)
app.use("/user", userRegisterRoute)
app.use("/protected", protectedRoutes)

app.listen(PORT, async () => {

     try {
          await connect
          console.log("MongoDB Connection Successful");
          console.log(`server is runing on ${PORT}`);
     } catch (error) {
          console.log(error);

     }

})

