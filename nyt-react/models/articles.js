import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    }
});

const Articles = mongoose.model('article', articleSchema);

export default Articles;