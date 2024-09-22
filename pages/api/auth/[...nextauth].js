import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from "next-auth/providers/email";
// import GithubProvider from "next-auth/providers/github";
// import FacebookProvider from "next-auth/providers/facebook";
// import AppleProvider from "next-auth/providers/apple";
import {MongoDBAdapter} from '@auth/mongodb-adapter';
import clientPromise from "@/lib/mongodb";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

  ]
})