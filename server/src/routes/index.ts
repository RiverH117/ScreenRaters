import { Router } from "express";
import authRoutes from "./authRoutes";
import {favoritesRouter} from './favorites';
import { userRouter } from "./user-routes";
//import {streamingRouter} from './streaming-routes';
//import {tvshowRouter} from './tvshows-routes';

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRouter)
router.use('/', favoritesRouter);
//router.use('/', streamingRouter);
//router.use('/', tvshowRouter);

export default router;
