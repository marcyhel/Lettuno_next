
import { changeSubscriptionPlanAction } from "@/pagamento/stripe";
import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { planId } = await request.json();
        if (!planId) {
            return NextResponse.json({ error: 'planId is required' }, { status: 400 });
        }

        const session = await auth();
        // const { userEmail } = await request.json();
        if (!session) {
            console.log("here aquii", session)
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }
        // console.log(userEmail)

        const success = await changeSubscriptionPlanAction(session?.user.email as string | '', planId);
        console.log('sucesso', success)
        if (success) {
            return NextResponse.json({ success: 'Subscription canceled' }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Failed to cancel subscription' }, { status: 400 });
        }

    } catch (error) {
        console.error('Error creating category:', error);
        return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
    }
}