A babel watcher is running on the server to listen your changes and reload the page. babel used in server.js for ES6 compilation.

Apollo-server-express used as a client to make graphql queries, mutations etc.

#to start the graphql server. 
>npm run build

##installed graphql tools and created a schema with type and query and also injected this schema in our server.js

install graphql-tools and create a schema to pass it in graphqlExpress

#Schema: In this tutorial, we are taking Author as a schema with age,name and books(he wrote) as properties. Hence define it in schema.js

#Query: We also defined query returning authors in schema.js

#addMockFunctionsToSchema - is used to generate mock/fake data. Please refer the screenshot to understand how we can work with graphiql.

## added resolvers to query from real data(JSON data defined in resolvers.js, not from DB yet)

resolvers will go and fetch your data from data store or database using queries that are requested by client(here its graphiql left panel)

## Selective Queries (complex)

querying author by age in resolvers.

## Realtime database - tired of using mock json?? lets work on real time database - mongodb

Installed mongoose module and used mongoose.connect to connect DB. Created author schema in models folder and declared schema with types.

Note: Please install mongodb in your machine and make sure to run `mongod` and `mongo` run in advance before you run 'npm run build'

## Mutations

What are Mutations? 

A GraphQL query performs the READ operation in a GraphQL API while a GraphQL mutation performs other operations such as CREATE, UPDATE and DELETE. This simply means that queries don't change data, a mutation does.

#Add Author

Add a record to mongodb using mutations. addAuthor in resolvers.js and schema.js helps to save data to mongodb using graphiql. Please refer screenshots.

#Delete Author

Delete a record from mongodb by using a snippet in resolvers and schema.js. Please refer the code related to this commit and screenshots.

#Update Author

Update a record in mongodb using graphiql by adding a snippet in resolvers and schema files.

#Queries Updated

author by age, author by id and fetch all authors - queries are updated.