import { ServiceResponse } from '../types/ServiceResponseTypes';
import { IBook, IBookModel } from '../Interfaces/Book';
import BookModel from '../models/BookModel';

export default class BookService {
    constructor(
        private bookModel: IBookModel = new BookModel()
    ){}

    async findAll(): Promise<ServiceResponse<IBook[]>>{
        const allBooks = await this.bookModel.findAll();
        return {status: 'SUCCESSFUL', data: allBooks}
    }
}