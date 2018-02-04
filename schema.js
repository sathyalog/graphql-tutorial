//generating schema from makeExecutableSchema
//as we dont have a datastore, we create a mock one using addMockFunctionsToSchema
import {makeExecutableSchema,addMockFunctionsToSchema} from 'graphql-tools';

const typeDefs = `type Author {
    age: Int
    name: String
    books: [String]
}
    type Query {
        author:[Author]
    }
`;

//generate schema
const schema = makeExecutableSchema({typeDefs});
//add mock data
addMockFunctionsToSchema({schema});

export default schema;