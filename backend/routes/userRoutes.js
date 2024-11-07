import express from 'express';
import { loginUser, logoutUser, myProfile, registerUser } from '../controllers/userControllers.js';
import { isAuth } from '../middlewares/isAuth.js';

const router=express.Router();

// Register route
router.post("/register",registerUser);// Endpoint to register a new user

// Login route
router.post("/login", loginUser); // Endpoint for user login

// Profile route - only accessible if authenticated
router.get("/me", isAuth, myProfile); 

// Logout route - also protected to ensure authenticated access
router.get("/logout", isAuth, logoutUser);  

export default router;