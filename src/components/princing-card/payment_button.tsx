'use client';
import { useCallback } from "react";
import { Button } from "../ui/button";
import { loadStripe } from '@stripe/stripe-js';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';


type PaymentButtonProps = {
    children: React.ReactNode;
    planId: string;
};

export default function PaymentButton({ children, planId }: PaymentButtonProps) {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? '');



    const fetchClientSecret = useCallback(() => {
        return fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ priceId: planId }),
        })
            .then((res) => res.json())
            .then((data) => {
                return data.client_secret
            });
    }, [planId]);

    const options = { fetchClientSecret };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">{children}</Button>
            </DialogTrigger>

            {/* Aqui adicionamos estilo manual ao DialogContent */}
            <DialogContent className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg">
                <VisuallyHidden.Root>
                    <DialogTitle>Assinatura Pro</DialogTitle>
                </VisuallyHidden.Root>

                <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            </DialogContent>
        </Dialog>
    );
}
