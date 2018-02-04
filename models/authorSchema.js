import mongoose from 'mongoose';
import UUID from 'node-uuid';

const schema = mongoose.Schema;

const authorSchema = new schema({
    //name,age,book and id
    id: {type:String,default:UUID.v1},
    name: String,
    age: Number,
    books: [String]
});

const model = mongoose.model('author',authorSchema);

export default model;