import { findUserByCredentials } from '@/lib/wrappers/user';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@/lib/types';
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: { label: "Username", type: "text", placeholder: "João@exemplo.com" },
            password: { label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
            console.log(credentials)
            const user = await findUserByCredentials(credentials.email as string, credentials.password as string);
            return user
        }
    })],
    callbacks: {
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role as string;
                session.user.subscriptionPlan = token.subscriptionPlan as string;
            }
            return session;
        },

        async jwt({ token, user }) {
            if (user) {
                token.role = (user as Partial<User>).role;
                token.subscriptionPlan = (user as Partial<User>).subscriptionPlan;
            }
            return token;
        },

    },
})
