import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Book } from '../../types/Book';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Book>>('books', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('books');
  }
};
