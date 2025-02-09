import { Router } from "express";
import authRoutes from "./authRoutes";
//import {movieRouter} from './routes/api/movie-routes';
//import {streamingRouter} from './streaming-routes';
//import {tvshowRouter} from './tvshows-routes';

const router = Router();

router.use("/auth", authRoutes);

//router.use('/', movieRouter);
//router.use('/', streamingRouter);
//router.use('/', tvshowRouter);

export default router;
