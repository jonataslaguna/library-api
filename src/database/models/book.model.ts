import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Book } from '../../types/Book';

type BookInputtableTypes = Optional<Book, 'id'>;
type BookSequelizeModelCreator = ModelDefined<Book, BookInputtableTypes>;
export type BookSequelizeModel = Model<Book, BookInputtableTypes>;

const BookModel: BookSequelizeModelCreator = db.define('Book', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantityPages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'books',
  timestamps: false,
  underscored: true,
});

export default BookModel;
