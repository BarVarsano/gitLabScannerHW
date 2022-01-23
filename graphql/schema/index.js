const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Repositories {
  _id: ID!
  name: String!
  size: Float!
  owner: String!
}
type Repository {
  _id: ID!
  name: String!
  size: Float!
  owner: String!
  private: Boolean!
  countFiels: Float!
  Content: String!
  ativeWebhooks: String!
}
type RootQuery {
  repos: String
}
schema {
  query: RootQuery
}
`);

// const { buildSchema } = require('graphql');

// module.exports = buildSchema(`
// type Event {
//   _id: ID!
//   title: String!
//   description: String!
//   price: Float!
//   date: String!
//   creator: User!
// }
// type User {
//   _id: ID!
//   email: String!
//   password: String
//   createdEvents: [Event!]
// }
// input EventInput {
//   title: String!
//   description: String!
//   price: Float!
//   date: String!
// }
// input UserInput {
//   email: String!
//   password: String!
// }
// type RootQuery {
//     events: [Event!]!
// }
// type RootMutation {
//     createEvent(eventInput: EventInput): Event
//     createUser(userInput: UserInput): User
// }
// schema {
//     query: RootQuery
//     mutation: RootMutation
// }
// `);




// const graphql = require('graphql');
// const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

// const RepositoriesType = new GraphQLObjectType({
//   name: 'Repositories',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     size: { type: GraphQLInt },
//     owner: { type: GraphQLString },
//   })
// });

// const RepoType = new GraphQLObjectType({
//   name: 'Repo',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     size: { type: GraphQLInt },
//     owner: { type: GraphQLString },
//     policy: { type: GraphQLString },
//     countFiels: { type: GraphQLInt },
//     Content: { type: GraphQLString },
//     ativeWebhooks: { type: GraphQLString },
//   })
// });

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     // status: {
//     //   type: GraphQLString,
//     //   resolve(parent, args) {
//     //     return "Welcome to GraphQL"
//     //   }
//     // },
//     repositories: {
//       type: RepositoriesType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return _.find(articles, { 'id': args.id })
//       }
//     },
//     contributor: {
//       type: ContributorType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return _.find(contributors, { 'id': args.id })
//       }
//     }
//   }
// });


// module.exports = new GraphQLSchema({
//   query: RootQuery
// });