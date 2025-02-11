import { Router } from "express";
import authRoutes from "./authRoutes";
import {favoritesRouter} from './favorites';
import { userRouter } from "./user-routes";
//import {Rating} from "./"
//import {tvshowRouter} from './tvshows-routes';

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRouter)
router.use('/favorites', favoritesRouter);
//router.use('/', streamingRouter);
//router.use('/', tvshowRouter);

export default router;
