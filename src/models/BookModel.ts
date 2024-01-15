import SequelizeBook from "../database/models/SequelizeBook";
import { IBook, IBookModel } from "../Interfaces/Book";

export default class BookModel implements IBookModel {
    private model = SequelizeBook;
 
    async findAll(): Promise<IBook[]> {
        const books = await this.model.findAll();
        return books;
    }

    async findById(id: number): Promise<IBook | null> {
        const book = await this.model.findByPk(id);
        return book;
    }

    async createBook(newBookData: IBook): Promise<IBook> {
        const newBook = await this.model.create(newBookData);

        return newBook;
    }

    async findByTitle(title: string): Promise<IBook | null> {
        const book = await this.model.findOne({
            where: {title: title}
        });
        return book;
    }

    async deleteBook(id: number): Promise<void> {
        await this.model.destroy(
            { where:{ id },
        });
    }
}