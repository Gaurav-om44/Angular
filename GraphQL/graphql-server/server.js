const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define the schema
const schema = buildSchema(`
  type Query {
    hello: String
    items: [Item]
  }

  type Item {
    id: ID
    name: String
    description: String
  }

  type Mutation {
    addItem(name: String, description: String): Item
  }
`);

// Define the root resolver
const root = {
  hello: () => 'Hello world!',
  items: () => [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
  ],
  addItem: ({ name, description }) => {
    const newItem = { id: Date.now(), name, description };
    return newItem;
  },
};

// Create an Express server and a GraphQL endpoint
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Server is running on http://localhost:4000/graphql'));
