import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeBook extends Model<InferAttributes<SequelizeBook>,
InferCreationAttributes<SequelizeBook>> {

  declare id: CreationOptional<number>;
  
  declare title: string;

  declare author: string;

  declare category: string;

  declare quantityPages: number;
}

SequelizeBook.init({
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
  sequelize: db,
  tableName: 'books',
  timestamps: false,
  underscored: true,
});

export default SequelizeBook;