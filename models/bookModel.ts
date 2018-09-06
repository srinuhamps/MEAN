import mongoose from 'mongoose';

const schema = mongoose.Schema;

export interface IBook extends mongoose.Document {
    title: string;
    genre: string;
    author: number;
    read: boolean;
};


const bookModel = new schema({
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
export default mongoose.model('Book', bookModel);