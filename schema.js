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
`;

//generate schema
const schema = makeExecutableSchema({typeDefs, resolvers});

//add mock data
//addMockFunctionsToSchema({schema});

export default schema;