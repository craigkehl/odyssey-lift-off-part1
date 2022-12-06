// converts GraphQL strings into the format that Apollo libraries expect
import { gql } from 'apollo-server';

// an author might create mulitiple tracks

export const typeDefs = gql`
  "A group of Modules teaching a specific topic"
  type Query {
    "Get tracks array for hompage grid"
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The time it usually takes to complete the track"
    length: Int
    "The number of Modules in the learning track."
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

// export const typeDefs = gql`
//   type Query {
//     spaceCats: [SpaceCat]
//   }

//   type SpaceCat {
//     id: ID!
//     name: String!
//     age: Int
//     missions: [Mission]
//   }

//   type Mission {
//     id: ID!
//     name: String!
//     description: String!
//   }
// `;
