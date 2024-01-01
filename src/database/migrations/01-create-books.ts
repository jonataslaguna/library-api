import {Model, QueryInterface, DataTypes} from 'sequelize';
import IBook from '../../Interfaces/Book/IBook';

export default  {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IBook>>('books', {
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
     queryInterface.dropTable('books');
  },
};








