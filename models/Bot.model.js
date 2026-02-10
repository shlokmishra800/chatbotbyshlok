import mongoose from "mongoose";



const botschema = new mongoose.Schema({


    sender:{
        required:true,
        type:String,
        enum:["user","bot"],

    },
    text:{
        type:String,
        required:true,

    },
    timestamp:{
        
        type:Date,
        default:Date.now
    }

})


const bot = mongoose.model("bot" , botschema)

export default bot