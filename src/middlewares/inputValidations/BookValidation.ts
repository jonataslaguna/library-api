import { NextFunction, Request, Response } from "express";
import joi from '../../utils/shemas/joi';

export default class BookValidation {
    static validateNewBook(req: Request, res: Response, next: NextFunction): Response | void {
        const body = req.body;
        const { error } = joi.validateBodyNewBook(body);
        let statusHTTP: number;

        if (error) {
            statusHTTP = error.message.includes('required') ? 400 : 422;
    
            return res.status(statusHTTP).json({ message: `${error.message}` });
        }

        next();
    }
};