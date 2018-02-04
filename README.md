A babel watcher is running on the server to listen your changes and reload the page. babel used in server.js for ES6 compilation.

Apollo-server-express used as a client to make graphql queries, mutations etc.

//to start the graphql server. 
>npm run build

//installed graphql tools and created a schema with type and query and also injected this schema in our server.js

install graphql-tools and create a schema to pass it in graphqlExpress

Schema: In this tutorial, we are taking Author as a schema with age,name and books(he wrote) as properties. Hence define it in schema.js

Query: We also defined query returning authors in schema.js

addMockFunctionsToSchema - is used to generate mock/fake data. Please refer the screenshot to understand how we can work with graphiql.

// added resolvers to query from real data(JSON data defined in resolvers.js, not from DB yet)

resolvers will go and fetch your data from data store or database using queries that are requested by client(here its graphiql left panel)
