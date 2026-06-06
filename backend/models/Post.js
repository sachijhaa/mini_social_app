const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
{
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    username:{
        type:String
    },

    text:{
        type:String,
        default:""
    },

    image:{
        type:String,
        default:""
    },

    likes:[
        {
            userId:String,
            username:String
        }
    ],

    comments:[
        {
            userId:String,
            username:String,
            text:String,
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ]
},
{
    timestamps:true
});

module.exports = mongoose.model("Post", postSchema);