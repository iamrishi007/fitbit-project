const express = require("express")
const userModel = require("../models/userRegister.model")
const bcrypt = require("bcrypt")


const userRegister = async (req, res) => {
     const { name, email, password, age } = req.body

     if (!name || !email || !password || !age) {
          return res.status(404).json({
               message: "all fileds are required dude "
          })
     }

     try {
          const user = await userModel.findOne({ email })
          if (user) {
               return res.status(400).json({
                    message: "user already exists. please login ."
               });
          }
          const hashpassword = await bcrypt.hash(password, 10)

          const newUser = userModel({
               name,
               email,
               password: hashpassword,
               age
          })
          await newUser.save()
          res.status(201).json({
               massage: "User registered successfully",
               user: { id: newUser._id, name: newUser.name, email: newUser.email, age: newUser.age }
          })

     } catch (error) {
          console.error(error);

          res.status(500).json({
               message: "Internal server error",
               error: error.message,
          });
     }
}

module.exports = userRegister