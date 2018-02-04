//instead of mock data lets create our own data on authors
const authors = [{
    name: 'JK Rowling',
    age: 50,
    books:['Harry Potter']
},
{
    name: 'George',
    age: 70,
    books:['Game of Thrones']
}];

// define resolvers using query.resolvers will go and fetch your data from data store or database using queries
//Note: query should be exactly with typedef defined in schema.js
const resolvers = {
    Query: {
        author:()=>{
            return authors
        }
    }
}

export default resolvers;