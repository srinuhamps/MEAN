import mongoose from 'mongoose';

//Define a schema
var Schema = mongoose.Schema;

export interface IBook extends mongoose.Document {
    title: string;
    author: string;
}

var booksSchema = new Schema({
    title: String,
    author: String
});


export default mongoose.model('books', booksSchema);
