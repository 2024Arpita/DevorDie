import { User } from "../models/User";
import generateToken from "../utils/generateToken";
import TryCatch from "../utils/TryCatch";
import bcrypt from 'bcrypt';

export const registerUser= TryCatch(async(req,res)=>{
    const {name,email,password}=req.body;

    let user=await User.findOne({email});

    if(user)
        return res.status(400).json({error: 'User already exists'});

    const hashPassword = await bcrypt.hash(password,10)

    user=await User.create({
        name,
        email,
        password:hashPassword,
    });

    generateToken(user._id,res);
    res.status(200).json({
        user,
        message: 'User registered successfully'
    });

});