const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type RepoDetails {
  name: String!
  size: Int!
  owner: String!
  visibility: String!
  filesAmount: Int
  content: String
  ativeWebhooks: String
}

type RepoListItem {
  name: String!
  size: Int!
  owner: String!
}

input RepoInput {
  name: String!
  owner: String!
}

input ReposInput {
  owner: String!
}

type RootQuery {
  repo(repoInput: RepoInput): RepoDetails!
  repos(reposInput: ReposInput): [RepoListItem!]!
}

schema {
  query: RootQuery
}
`);
