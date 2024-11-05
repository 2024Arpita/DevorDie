import { User } from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import TryCatch from "../utils/TryCatch.js";
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

export const loginUser= TryCatch(async(req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});

    if(!user)
        return res.status(400).json({error: 'No User found'});

    const comparePassword = await bcrypt.compare(password,user.password);

    if(!comparePassword)
        return res.status(400).json({error: 'Incorrect password'});
// not a good practice for showing wrong password since it will hackers easy to brute force the password with that email


    generateToken(user._id,res); //generate the token

    res.status(200).json({
        user,
        message: 'User logged in successfully'
    });

});

export const myProfile=TryCatch(async(req,res)=>{
    const user=await User.findById(req.user._id);

    res.json(user);
})

// logout k liye token ko cookie m se hata denge

export const logoutUser=TryCatch(async(req,res)=>{
    res.cookie("token","",{maxAge:0});
    
    res.json({message: 'User logged out successfully'});
})