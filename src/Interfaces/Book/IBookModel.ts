import IBook from "./IBook";

export default interface IBookModel {
    findAll(): Promise<IBook[]>;
}