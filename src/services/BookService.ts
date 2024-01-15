import { ServiceMessage, ServiceResponse } from '../types/ServiceResponseTypes';
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

    async createBook(newBookData: IBook): Promise<ServiceResponse<IBook>> {
        const bookIsExist = await this.bookModel.findByTitle(newBookData.title);

        if(bookIsExist) return {status: 'CONFLICT', data: { message: 'The book already exists' }};

        const addedBook =  await this.bookModel.createBook(newBookData);
        
        return {status: 'CREATED', data: addedBook};
    }

    async deleteBook(id: number): Promise<ServiceResponse<ServiceMessage>> {
        const findBook = await this.bookModel.findById(id);

        if(!findBook) return {status: 'NOT_FOUND', data: { message: 'Book not found' }};

        await this.bookModel.deleteBook(id);

        return {status: 'SUCCESSFUL', data: { message: 'Book removed successfully' }};
    }
}