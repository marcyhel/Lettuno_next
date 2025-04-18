import Image from "next/image";
import logo from '../../app/assets/logo.svg'
export default async function Footer() {
    return (
        <footer className="mt-16 border-t border-gray-300 pt-10 bg-white text-center pb-5  w-full bottom-0">
            <Image src={logo} alt="Logotipo" className="mx-auto w-32" />
            <p className="text-muted-foreground">
                © 2025 Lettuno. Todos os direitos reservados.
            </p>
        </footer>
    );

}