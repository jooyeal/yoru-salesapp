import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "J Smith", email: "jyol1234@example.com" };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return credentials;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error("error message") // Redirect to error page
          // throw "/path/to/redirect"        // Redirect to a URL
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  // emailのドメイン制限を入れたい場合は以下のcallbacksを入れてください
  callbacks: {
    callbacks: {
      async jwt(token, user, account, profile, isNewUser) {
        token.userId = user;
        return token;
      },
      async session(session, userOrToken) {
        session.user.userId = userOrToken.userId;
        session.user.test = userOrToken.test;
        return session;
      },
    },
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
