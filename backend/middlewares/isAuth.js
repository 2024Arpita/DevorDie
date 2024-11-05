// function to check authentication
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js';

export const isAuth=async (req, res, next) => {
    try {
      const token=req.cookies.token  //isko read krne k liye cookie parser ki need hogi

      if(!token) return   res.status(403).json({  //for unauthorised uesrs 403
        message:"please try again",
    });

    const decodedData=jwt.verify(token,process.env.Jwt_secret);

    if(!decodedData) return res.status(403).json({
        message:"token is not valid",
    });

    req.user=await User.findById(decodedData.id) ;
     //id jo generte token m li thi yahan se data usercontroller wali file m jayega

    next(); //function se bahar aa jayenge

    } catch (error) {
        res.status(500).json({
            message:"please try again",
        })
    }
}