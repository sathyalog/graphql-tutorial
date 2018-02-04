import mongoose from 'mongoose';
import authorModel from './models/authorSchema.js'

// define resolvers using query.resolvers will go and fetch your data from data store or database using queries
//Note: query should be exactly with typedef defined in schema.js
const resolvers = {
    Query: {
        authors:()=>{
            //return authors
        },
       author: (root,args) => {
            // const age = args.age;
            // return authors.find(author => author.age === age);
       }
    },
    Mutation:{
        addAuthor: (root,{name,age,books}) => {
         const author = new authorModel({
             age:age,
             name:name,
             books:books
         });
         return author.save();
        },
        // delete an author using id
        deleteAuthor:(root,{id}) => {
            return authorModel.findOneAndRemove({id:id})
        },
        // we would like to update name of author using id
        updateAuthor:(root,{id,name}) => {
            return authorModel.findOneAndUpdate({id:id},{name:name});
        }
    }
}

export default resolvers;

//instead of mock data lets create our own data on authors. This is our data store for now
/*const authors = [{
    name: 'JK Rowling',
    age: 50,
    books:['Harry Potter']
},
{
    name: 'George',
    age: 70,
    books:['Game of Thrones']
},
{
    name: 'Stephen',
    age: 60,
    books:['Books of Tales']
}];*/