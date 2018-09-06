import  express  from 'express';
import  path from 'path';
import  cookieParser  from 'cookie-parser';
import  logger  from 'morgan';
import bodyParser from 'body-parser';

import  indexRouter from './routes/index';
import  usersRouter from './routes/users';
import booksRouter from './routes/books';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

module.exports = app;
