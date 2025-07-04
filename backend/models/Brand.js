const mongoose=require("mongoose")
const {Schema}=mongoose


const brandSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image : {
        type: String,
       
      },
})

module.exports=mongoose.model("Brand",brandSchema)