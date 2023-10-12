const mongoose=require('mongoose')

var Categoryschema=mongoose.Schema({
    Company:String,
    model:String,
    category:String,
    os:String
    
})

const categorymodel=mongoose.model("Category",Categoryschema)
module.exports=categorymodel