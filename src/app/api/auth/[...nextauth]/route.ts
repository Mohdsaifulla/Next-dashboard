import User from "@/models/userData";
import { connectMongoDB } from "@/mongodb/mongodb";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        const { email, password } = credentials || {};
        try {
          await connectMongoDB();
          console.log("Received credentials:", credentials);
          const user = await User.findOne({ email });
          const checkpassoword = await User.findOne({ password });
          if (!user) {
            return null;
          }
          if (!checkpassoword) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
