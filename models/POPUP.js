const mongoose=require("mongoose");
const popup=new mongoose.Schema({
    email:{
        type: String,
        required: true,

    },
    brandname:{
        type: String,
        required: true,
    }

},{timestamps:true});
const POPUP=mongoose.model("popup",popup);
module.exports=POPUP;