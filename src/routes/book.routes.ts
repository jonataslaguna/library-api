import { Request, Router, Response } from "express";
import BookController from '../controllers/BookController';

const bookController = new BookController();

const router = Router();

router.get('/', (req: Request, res: Response) => bookController.findAll(req, res));

router.get('/:id', (req: Request, res: Response) => bookController.findById(req, res));

export default router;