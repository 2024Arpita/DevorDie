import jwt from'jsonwebtoken';

// we are generating token so that register krne k baad dobara login na krna pade turant hi website open ho jaye
const generateToken=(id,res)=>{  //id jo store kr rhe usi se user ko find karenge
    const token=jwt.sign({id},process.env.Jwt_secret,{
        expiresIn:'30d', //token 30 days m expire hoga 
    })

    res.cookie("token",token,{
        maxAge:30*24*60*60*1000, //token 30 days m expire hoga
        httpOnly:true, // token only accessible through http requests
        sameSite:"strict", // hacking se bachane k liye
    })
}

export default generateToken;