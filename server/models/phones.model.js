const mongoose=require("mongoose")
const phonesSchema=new mongoose.Schema({
     title:{
          type:String,
          required: true
     },
     image_url:{
          type:String,
          required: true
     },
     price:{
          type:Number,
          required: false
     }
})

const phonesModel=mongoose.model("phone",phonesSchema)

module.exports=phonesModel