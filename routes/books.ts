import express, { Request, Response, NextFunction } from 'express';
var router = express.Router();

import Book, { IBook } from '../schema/books';

import mongoose from 'mongoose';

var mongoDB = 'mongodb://127.0.0.1/booksDb';
mongoose.connect(mongoDB);

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    Book.find((err: any, books: IBook[]) => {
        res.json(books)
    });
});

router.get('/:bookId', (req: Request, res: Response, next: NextFunction) => {
    const { bookId } = req.params;
    Book.findById(bookId, (err: any, book: IBook) => {
        res.json(book)
    })
});

export default router;
