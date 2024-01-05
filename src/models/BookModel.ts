import SequelizeBook from "../database/models/SequelizeBook";
import { IBook, IBookModel } from "../Interfaces/Book";

export default class BookModel implements IBookModel {
 
    async findAll(): Promise<IBook[]> {
        const books = await SequelizeBook.findAll();
        return books;
    }

    async findById(id: number): Promise<IBook | null> {
        const book = await SequelizeBook.findByPk(id);
        return book;
    }
}