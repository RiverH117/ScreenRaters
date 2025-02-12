import { Router } from "express";
import apiRoutes from "./api/index.js";
import authRoutes from "./authRoutes.js";
//import {movieRouter} from './routes/api/movie-routes';
//import {streamingRouter} from './streaming-routes';
//import {tvshowRouter} from './tvshows-routes';

const router = Router();

router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

//router.use('/', movieRouter);
//router.use('/', streamingRouter);
//router.use('/', tvshowRouter);

export default router;
