// src/app/api/auth/[...nextauth]/authOptions.ts

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "prisma"
adapter: PrismaAdapter(prisma)
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "", // zabezpeč, že máš toto nastavené v .env
  pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to the requested URL if it's valid, otherwise fallback to baseUrl
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl; // In case the URL is an external URL
    },
  },
  events: {
    async signIn(message) {
      // Optional: Logovanie sign-in pokusov
      console.log("User signed in:", message);
    },
    async signOut(message) {
      // Optional: Logovanie sign-out pokusov
      console.log("User signed out:", message);
    },
  },
};
