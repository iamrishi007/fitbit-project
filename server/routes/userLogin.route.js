const express=require("express")
const userLoginRoute=express.Router()
const userLogin=require("../controllers/userLogin")

userLoginRoute.post("/login",userLogin)

module.exports=userLoginRoute