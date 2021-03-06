import mongoose from 'mongoose';

//Define a schema
var Schema = mongoose.Schema;

export interface IBook extends mongoose.Document {
    title: string;
    genre: string;
    author: number;
    read: boolean;
}

var booksSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean, default: false
    }
});


export default mongoose.model('books', booksSchema);
