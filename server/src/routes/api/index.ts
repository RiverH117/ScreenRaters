import { Router } from "express";
import { favoritesRouter } from './favorites.js';
import { userRouter } from "./user-routes.js";
import { ratingRouter } from "./ratingRoutes.js"
import { commentRouter } from './commentRoute.js';


const router = Router();


router.use("/users", userRouter)
router.use('/favorites', favoritesRouter);
router.use('rating', ratingRouter)
router.use('/Comment', commentRouter);

export default router;
