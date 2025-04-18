import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            role?: string;
            subscriptionPlan?: string
        } & DefaultSession["user"];
    }
}