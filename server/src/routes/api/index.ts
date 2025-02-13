import { Router } from "express";
import userRouter from "./userRoutes.js";
import { ratingRouter } from "./ratingRoutes.js";
import { favoritesRouter } from "./favorites.js";
import { commentRouter } from "./commentRoute.js";

const router = Router();

// router.use('/users', userRouter);
router.use('/users', userRouter);
router.use('/ratings',ratingRouter);
router.use('/favorites', favoritesRouter );
router.use('/comments', commentRouter);

export default router;
