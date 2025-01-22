// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

// handler pre GET a POST metódy
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
