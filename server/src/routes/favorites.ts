import express from 'express';
import type { Request, Response } from 'express';
import { Favorite } from '../models/Favorite';

const router = express.Router();

// GET /Favorites/: movieOrShowId - Get a Favorites by Movie/show id
router.get('/: movieOrShowId', async (req: Request, res: Response) => {
  const {  movieOrShowId } = req.params;
  try {
    const favorites = await Favorite.findByPk( movieOrShowId, {
    });
    if (favorites) {
      res.json(favorites);
    } else {
      res.status(404).json({ message: 'Movie or Show id not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /favorites - Create a id based on your user
router.post('/', async (req: Request, res: Response) => {
  const { userId, movieOrShowId } = req.body;
  try {
    const newUser = await Favorite.create({userId, movieOrShowId });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /users/:id - Update a movie or tvshow by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const {  userId, movieOrShowId } = req.body;
  try {
    const favorites = await Favorite.findByPk(id);
    if (favorites) {
      favorites.userId = userId;
      favorites.movieOrShowId = movieOrShowId;
      await favorites.save();
      res.json(favorites);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});


export { router as favoritesRouter };
