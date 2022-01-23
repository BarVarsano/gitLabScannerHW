const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');

const graphQlResolvers = require('./graphql/resolvers/index');
const graphQlSchema = require('./graphql/schema/index');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send(`Running a GraphQL API server at http://localhost:${port}/graphql`);
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});