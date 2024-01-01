import SequelizeBook from "../database/models/SequelizeBook";
import { IBook, IBookModel } from "../Interfaces/Book";

export default class BookModel implements IBookModel {
    public findAll(): Promise<IBook[]> {
        return SequelizeBook.findAll();
    }
}