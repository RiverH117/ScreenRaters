import express from 'express';
import type { Request, Response } from 'express';
import { Rating } from '../../models/index.js';
import { JwtPayload } from 'jsonwebtoken';

const router = express.Router();

// GET /Favorites/: movieOrShowId - Get all Favorites by  id
router.get('/', async (_req: Request, res: Response) => {
    try {
      const rates = await Rating.findAll();
      res.status(200).json(rates);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.get('/:id', async (req: Request, res: Response) => {
    try {
      const rates = await Rating.findByPk(req.params.id);
      if (rates) {
        res.status(200).json(rates);
      } else {
        res.status(404).json({ error: 'Tip not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// POST /favorites - Create a id based on your user
router.post('/', async (req: Request, res: Response) => {
  const { movieOrShowId , rating } = req.body;
  const { username } = req.user as JwtPayload
  try {
    const newRates = await Rating.create({ username,  movieOrShowId , rating });
    res.status(201).json(newRates)
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { router as ratingRouter}