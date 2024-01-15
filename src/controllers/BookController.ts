import { Request, Response } from 'express';
import BookService from '../services/BookService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class BookController {
    constructor(
        private bookService = new BookService(),
    ){}

    async findAll(_req: Request, res: Response){
        const { status, data} = await this.bookService.findAll();
     
        res.status(mapStatusHTTP(status)).json(data);
    }

    async findById(req: Request, res: Response){
        const {id} = req.params;

        const { status, data} = await this.bookService.findById(Number(id));
     
        res.status(mapStatusHTTP(status)).json(data);
    }

    async createBook(req: Request, res: Response){
        const newBookData = req.body;

        const { status, data} = await this.bookService.createBook(newBookData);
     
        res.status(mapStatusHTTP(status)).json(data);
    }

    async deleteBook(req: Request, res: Response) {
        const { id } = req.params;
      
        const { status, data} = await this.bookService.deleteBook(Number(id));
     
        res.status(mapStatusHTTP(status)).json(data);
    }
}