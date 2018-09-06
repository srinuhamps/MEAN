import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const db = mongoose.connect('mongodb://127.0.0.1/booksDb');

import Book, { IBook } from '../models/bookModel';
import bookModel from '../models/bookModel';

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  let query: any = {};
  if (req.query.genre) {
    query.genre = req.query.genre;
  }
  Book.find(query, (err: any, books: IBook[]) => {
    if (err) {
      res.status(500).send(err);
    } else
      res.json(books);
  });
});

router.get('/:bookId', (req: Request, res: Response, next: NextFunction) => {
  const { bookId } = req.params;
  Book.findById(bookId, (err: any, book: IBook) => {
    if (err) {
      res.status(404).send('no book found');
    } else
      res.json(book);
  });
});

router.post('', (req: Request, res: Response, next: NextFunction) => {
  const book = new bookModel(req.body);
  book.save((err: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(book);
    }
  });
});

router.put(
  '/:bookId', function (req: Request, res: Response, next: NextFunction) {
    const { bookId } = req.params;
    Book.findById(bookId, (err: any, book: IBook) => {
      if (err) {
        res.status(500).send('no book found');
      } else {
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.title = req.body.title;
        book.read = req.body.read;
        book.save((err: any) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.json(book);
          }
        });
      }
    });
  });

router.delete('/:bookId', (req: Request, res: Response, next: NextFunction) => {
  const { bookId } = req.params;
  Book.findById(bookId, (err: any, book: IBook) => {
    if (err) {
      res.status(404).send('no book found');
    } else {
      book.remove((err: any) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).send('Removed')
        }
      });
    }
  });
});

export default router;
