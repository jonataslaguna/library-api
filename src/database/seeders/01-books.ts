import { QueryInterface } from 'sequelize';
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('books', [
      {
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
        category: 'Fantasy',
        quantityPages: 310,
      },
      {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        category: 'Fantasy',
        quantityPages: 1178,
        
      },
      {
        title: '2001: A Space Odyssey',
        author: 'Arthur C. Clarke',
        category: 'Science fiction',
        quantityPages: 336,
        
      },
      {
        title:'Blade Runner',
        author: 'Philip K. Dick',
        category: 'Science fiction',
        quantityPages: 221,
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J. K. Rowling',
        category: 'Fantasy',
        quantityPages: 342,
      }
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('books', {});
  }
};
