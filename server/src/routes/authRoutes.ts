import { Router,  Request, Response } from "express";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  console.log("User", user);
  if (!user) {
    return res.status(401).json( {message: "Authentication failed1" });

  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const secretKey = process.env.JWT_SECRET_KEY || "";
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });

  return res.json({ token, user });
};



// POST /login - Login a user
router.post("/login", login);

const createAccount = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log("Creating account", username, password);
    if (!username || !password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
// Check if the username already exists
    // const existingUser = await User.findOne({ where: { username } });
    // if (existingUser) {
    //   return res.status(400).json({ message: "Username already taken" });
    // }
    
    
    
    
    const newUser = await User.create({ username, password });
    
    const secretKey = process.env.JWT_SECRET_KEY || "";
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    
    return res.status(201).json({ token, user: newUser });
  } catch (error) {
    console.error("Failed to create account", error);
    return res.status(500).json({ message: "Failed to create account" });
  }
};

// POST /api/auth/create-account - Create a new account
router.post("/create-account", createAccount);


export default router;
