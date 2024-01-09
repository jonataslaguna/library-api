import IBook from "./IBook";

export default interface IBookModel {
    findAll(): Promise<IBook[]>;
    findById(id: number): Promise<IBook | null>;
    createBook(newBookData: IBook): Promise<IBook>; 
    findByTitle(title: string): Promise<IBook | null>;
}