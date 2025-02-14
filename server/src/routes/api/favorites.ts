import express from 'express';
import type { Request, Response } from 'express';
import { Favorite } from '../../models/index.js';
import { JwtPayload } from 'jsonwebtoken';


const router = express.Router();

// GET /Favorites/: movieOrShowId - Get all Favorites by  id
router.get('/', async (_req: Request, res: Response) => {
    try {
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.get('/:id', async (req: Request, res: Response) => {
    try {
      const favorites = await Favorite.findByPk(req.params.id);
      if (favorites) {
        res.status(200).json(favorites);
      } else {
        res.status(404).json({ error: 'Tip not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// POST /favorites - Create a id based on your user
router.post('/', async (req: Request, res: Response) => {
  const { movieOrShowId, favorite } = req.body;
  const { username } = req.user as JwtPayload
  try {
    if (favorite) {
      const newFavorite = await Favorite.create({ movieOrShowId , username  });
      res.status(201).json(newFavorite);
    }else {
      res.status(200);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { router as favoritesRouter };
