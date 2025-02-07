import { Router } from 'express';
import {movieRouter} from './movie-routes';
import {streamingRouter} from './streaming-routes';
import {tvshowRouter} from './tvshows-routes';



const router = Router();

router.use('/', movieRouter);
router.use('/', streamingRouter);
router.use('/', tvshowRouter);

export default router;