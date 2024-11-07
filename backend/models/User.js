import mongoose from "mongoose";

const schema= new mongoose.Schema({  //schema is basically structure of user
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default: 'user',
    },
     playlist:[{
        type:String,
        required:true   
    },
    ],
},{
    timestamps: true,  //utomatically adds createdAt and updatedAt fields to the schema.
});

export const User=mongoose.model("User",schema)