//generating schema from makeExecutableSchema
//as we dont have a datastore, we create a mock one using addMockFunctionsToSchema
import {makeExecutableSchema,addMockFunctionsToSchema} from 'graphql-tools';
import resolvers from './resolvers.js'

const typeDefs = `type Author {
    id: String
    age: Int
    name: String
    books: [String]
}
    type Query {
        authors:[Author]
        author(id:String):Author
    }
    type Mutation {
        addAuthor(name:String!,age:Int!,books:[String]!):Author
        deleteAuthor(id:String!):Author
        updateAuthor(id:String!,name:String!):Author
    }
`; //'name:String!' in addAuthor represents its a required and mandatory field

//generate schema
const schema = makeExecutableSchema({typeDefs, resolvers});

//add mock data
//addMockFunctionsToSchema({schema});

export default schema;