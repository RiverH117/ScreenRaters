import { Router, Request, Response } from "express";
import { User } from "../models/index";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || "";

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
  return res.json({ token }); // Send the token as a JSON response
};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post("/login", login);
// Define the createAccount function
const createAccount = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  await User.create({ username, password: hashedPassword });

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || "";

  // Generate a JWT token for the new user
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });

  return res.json({ token }); // Send the token as a JSON response
};

// POST /create-account - Create a new account
router.post("/create-account", createAccount); // Define the create-account route

export default router; // Export the router instance
