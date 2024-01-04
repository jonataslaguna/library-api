import { Request, Response } from 'express';
import BookService from '../services/BookService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class BookController {
    constructor(
        private bookServise = new BookService(),
    ){}

    async findAll(_req: Request, res: Response){
        const { status, data} = await this.bookServise.findAll();
     
        res.status(mapStatusHTTP(status)).json(data);
    }
}