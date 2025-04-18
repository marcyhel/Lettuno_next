import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { auth } from 'auth';
import FormularioConfigPessoal from './formularioConfigPessoal';


export default async function ConfiguracoesPage() {
    // Obter informações do usuário do lado do servidor
    const session = await auth();
    const userName = session?.user?.name || '';
    const userEmail = session?.user?.email || '';




    return (
        <div className="space-y-6 w-full ls:max-w-full max-w-3xl  mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Perfil de Usuário</h1>
                <p className="text-muted-foreground mt-2">Gerencie suas informações pessoais.</p>
            </div>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>
                        Atualize suas informações pessoais aqui.
                    </CardDescription>
                </CardHeader>
                <FormularioConfigPessoal initialName={userName} userEmail={userEmail} />
            </Card>
        </div>
    );
}