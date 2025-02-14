import express from 'express';
import type { Request, Response } from 'express';
import  { Comment }  from '../../models/index.js';
import { JwtPayload } from 'jsonwebtoken';

const router = express.Router();

// GET /Favorites/: movieOrShowId - Get all Favorites by  id
router.get('/', async (_req: Request, res: Response) => {
    try {
      const allComments = await Comment.findAll();
      res.status(200).json(allComments);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.get('/:id', async (req: Request, res: Response) => {
    try {
      const idComment = await Comment.findByPk(req.params.id);
      if (idComment) {
        res.status(200).json(idComment);
      } else {
        res.status(404).json({ error: 'Tip not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// POST /favorites - Create a id based on your user
router.post('/', async (req: Request, res: Response) => {
  const { movieOrShowId , comment} = req.body;
  const { username } = req.user as JwtPayload
  try {
    const newComment = await Comment.create({ username, movieOrShowId, content: comment});
    res.status(201).json(newComment);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { router as commentRouter };