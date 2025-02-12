import { Router } from "express";
import type { Request, Response } from "express";
import { User } from "../../models/index.js";

const router = Router();

// GET all authors
router.get("/", async (_req: Request, res: Response) => {
  try {
    // ! find all authors and perform a JOIN to include all associated Books
    const userData = await User.findAll({
      include: [{ model: User, as: "users" }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single author
router.get("/:id", async (req: Request, res: Response) => {
  try {
    // ! find a single author by their `id` and perform a JOIN to include the associated Books
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: User, as: "users" }],
    });

    if (!userData) {
      res.status(404).json({ message: "No author found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an author
router.post("/", async (req: Request, res: Response) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an author
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No author found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
