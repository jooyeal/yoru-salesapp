import { gql, Config } from "apollo-server-micro";

export const typeDefs: Config["typeDefs"] = gql`
  type User {
    id: String
    name: String
    username: String
    email
  }

  type Query {
    getArticle(id: Int): Article
    getArticles: [Article]
  }
`;
