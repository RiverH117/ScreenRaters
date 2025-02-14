import { Router } from "express";
import apiRoutes from "./api/index.js";
import authRoutes from "../routes/authRoutes.js";
import { authenticateToken } from "../middleware/auth.js";
//import {movieRouter} from './routes/api/movie-routes';
//import {streamingRouter} from './streaming-routes';
//import {tvshowRouter} from './tvshows-routes';

const router = Router();

// router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
// router.use("/api", apiRoutes)
router.use('/api', authenticateToken, apiRoutes);

export default router;
