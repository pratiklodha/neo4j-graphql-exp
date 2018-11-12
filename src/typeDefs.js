export const typeDefs = `

# The definitive type of the user
enum UserType {
  SystemUser
  LdapUser
  CustomUser
  OauthUser
}

# Binary document content details
type DocumentContent {
  # Reference ID of the content
  contentRefID: String!
  # Document file name
  documentFileName: String!
  # Document mimeType
  documentMimeType: String!
  # Document encoding
  documentEncoding: String!
  # Content Checksum
  checksum: String!
}

interface User {
  id: ID!
  type: UserType!
  email: String!
  fullName: String!
  enabled: Boolean!
  emailVerified: Boolean!
  photoUrl: String
  uploadedDocuments: [DocumentContent]
}

type CustomUser implements User {
  id: ID!
  type: UserType!
  email: String!
  fullName: String!
  enabled: Boolean!
  emailVerified: Boolean!
  photoUrl: String
  uploadedDocuments: [DocumentContent]
}

type LdapUser implements User {
  id: ID!
  type: UserType!
  userName: String!
  email: String!
  fullName: String!
  enabled: Boolean!
  emailVerified: Boolean!
  photoUrl: String
  uploadedDocuments: [DocumentContent]
}

type Query {
  # Get a user by id.
  # Requires authenticated session.
  user(id: String!): User
  # Get all users.
  # Requires authenticated session.
  users: [User]
}

`;
