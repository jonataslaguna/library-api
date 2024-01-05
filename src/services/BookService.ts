import { ServiceResponse } from '../types/ServiceResponseTypes';
import { IBook, IBookModel } from '../Interfaces/Book';
import BookModel from '../models/BookModel';

export default class BookService {
    constructor(
        private bookModel: IBookModel = new BookModel()
    ){}

    async findAll(): Promise<ServiceResponse<IBook[]>>{
        const allBooks = await this.bookModel.findAll();
        return {status: 'SUCCESSFUL', data: allBooks};
    }

    async findById(id: number): Promise<ServiceResponse<IBook>> {
        const book =  await this.bookModel.findById(id);
        
        if (!book) return {status: 'NOT_FOUND', data: { message: 'Book not found' }};

        return {status: 'SUCCESSFUL', data: book};
    }
}