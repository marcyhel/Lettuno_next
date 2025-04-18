import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'Nenhum arquivo foi enviado' },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Gera um nome único para o arquivo
        const timestamp = Date.now();
        const fileName = `${timestamp}-${file.name}`;
        const booksDir = join(process.cwd(), 'public', 'books');

        // Garante que o diretório existe
        if (!existsSync(booksDir)) {
            await mkdir(booksDir, { recursive: true });
        }

        const filePath = join(booksDir, fileName);
        const publicPath = `/books/${fileName}`;

        // Salva o arquivo
        await writeFile(filePath, buffer);

        return NextResponse.json({ filePath: publicPath });
    } catch (error) {
        console.error('Erro ao processar upload:', error);
        return NextResponse.json(
            { error: 'Erro ao processar o upload do arquivo' },
            { status: 500 }
        );
    }
}