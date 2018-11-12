export const resolvers = {
  User: {
    __resolveType(user) {
      console.log(`resolveType invoked!`);
      return user.type;
    }
  },
  Query: {
    async users(obj, args, context) {
      console.log("queried users");
      return [
        {
          id: "One",
          type: "CustomUser",
          fullName: "One",
          email: "One",
          enabled: true,
          emailVerified: true
        }
      ];
    }
  }
};
