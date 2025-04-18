import { findUserByCredentials, getUserSubscription } from '@/lib/wrappers/user';
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
                session.user.name = token.name as string;
            }
            return session;
        },

        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.role = (user as Partial<User>).role;
                token.subscriptionPlan = (user as Partial<User>).subscriptionPlan;
                token.name = (user as Partial<User>).name;
            }

            // Atualiza o nome do usuário quando o método update() é chamado
            if (trigger === "update" && session?.user?.name) {
                token.name = session.user.name;
            }

            // Buscar informações atualizadas da assinatura se tivermos o email do usuário
            if (token.email) {
                try {
                    // Forçar verificação com o Stripe para garantir dados atualizados
                    const subscription = await getUserSubscription(token.email as string, true);
                    if (subscription) {
                        token.subscriptionPlan = subscription.subscriptionPlan;
                    } else {
                        // Se não há assinatura, definir como plano gratuito
                        token.subscriptionPlan = 'FREE';
                    }
                } catch (error) {
                    console.error('Erro ao verificar assinatura:', error);
                    // Manter o plano atual em caso de erro
                }
            }

            return token;
        },
    },
    session: {
        // Reduzir o tempo de vida da sessão para forçar atualizações mais frequentes
        maxAge: 60 * 60, // 1 hora em segundos
        updateAge: 5 * 60, // Atualizar a cada 5 minutos
    }
})
