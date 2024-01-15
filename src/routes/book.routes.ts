import { Request, Router, Response } from "express";
import BookController from '../controllers/BookController';
import BookValidation from '../middlewares/inputValidations/BookValidation';

const bookController = new BookController();

const router = Router();

router.get('/', (req: Request, res: Response) => bookController.findAll(req, res));

router.get('/:id', (req: Request, res: Response) => bookController.findById(req, res));

router.post('/', BookValidation.validateNewBook, (req: Request, res: Response) => bookController.createBook(req, res));

router.delete('/:id', (req: Request, res: Response) => bookController.deleteBook(req, res));

export default router;