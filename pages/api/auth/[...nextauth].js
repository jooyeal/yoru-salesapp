import NextAuth from "next-auth";
import GoogleProviders from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";

const options = {
  secret: process.env.NEXTAUTH_SECRET,
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
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: req.body.email,
              password: req.body.password,
            },
          });
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ account, profile }) {
      return true;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
    async session(session, userOrToken) {
      return session;
    },
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
