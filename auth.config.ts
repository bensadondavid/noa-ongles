import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const p = nextUrl.pathname;

      // Always allow NextAuth endpoints
      if (p.startsWith("/api/auth")) return true;

      // Allow login pages
      if (p === "/login" || p === "/fr/login" || p === "/he/login") return true;

      // Allow ONLY home pages
      if (p === "/fr" || p === "/he" || p === "/fr/" || p === "/he/") return true;

      // Everything else requires auth
      return !!auth?.user;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;