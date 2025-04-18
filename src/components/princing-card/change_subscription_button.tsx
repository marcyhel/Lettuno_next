// AssineButton.tsx
'use client';

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
;
import { redirect } from "next/navigation";
import { useState } from "react";


export default function AssineButton({ planId }: { planId: string }) {
    const [isLoade, setIsLoade] = useState<boolean>(false);
    // useEffect(() => {
    //     update();
    // }, []);
    const onClick = async () => {
        setIsLoade(true)
        const sub = await fetch("/api/change_assinatura", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ planId: planId }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast({
                        title: 'Plano atualizado',
                        description: 'Seu plano foi atualizado. Aproveite!.',
                    });
                    setIsLoade(false)
                    redirect('/dashboard');
                }
                return data.client_secret
            }).catch((error) => {
                toast({
                    title: 'Erro',
                    description: 'Ocorreu um erro ao atualizar o plano. Tente novamente mais tarde. error:' + error,
                });
                setIsLoade(false)
                return null;
            });
        setIsLoade(false)
        // const sub = await changeSubscriptionPlanAction(session?.user.email as string | '', planId);
        console.log(sub);
    };
    return (
        <Button onClick={onClick} className="w-full" disabled={isLoade}> Assine já</Button>
    );

};
