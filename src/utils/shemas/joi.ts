import * as Joi from 'joi';
import { ValidationResult } from 'joi';
import { IBook } from '../../Interfaces/Book';

const validateBodyNewBook = (body: IBook): ValidationResult<IBook> =>
  Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    category: Joi.string().min(3).required(), 
    quantityPages: Joi.number().min(20).required(), 
  }).validate(body);

export default {
    validateBodyNewBook,
};