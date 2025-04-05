const mongoose=require("mongoose")
const earbudsSchema=new mongoose.Schema({
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

const earbudsModel=mongoose.model("earbud",earbudsSchema)

module.exports=earbudsModel