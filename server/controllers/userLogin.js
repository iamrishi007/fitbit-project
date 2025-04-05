const express = require("express")
const mongoose = require("mongoose")
const userModel = require("../models/userRegister.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userLogin = async (req, res) => {

     const { email, password } = req.body;
     if (!email || !password) {
          return res.status(404).json({
               message: "please register first dude "
          })
     }
     try {
          const user = await userModel.findOne({ email })
          if (!user) {
               return res.status(400).json({
                    message: "Invalid email.",
               });
          }

          const isMatchPass = await bcrypt.compare(password, user.password)
          if (!isMatchPass) {
               return res.status(400).json({
                    message: "Invalid password.",
               });
          }
          const key = process.env.SECRET_KEY

          const token = jwt.sign({ id: user._id, email: user.email, password: user.password }, key, { expiresIn: "1h" })
          

          res.status(200).json({
               message: "user loging successfully ",
               token: token,
               user: { id: user._id, name: user.name, email: user.email },

          })

          

     } catch (error) {
          res.status(500).json({
               message: "Login failed. Please try again.",
               error: error.message,
          });
     }
}

module.exports = userLogin