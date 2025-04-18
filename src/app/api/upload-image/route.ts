import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';
import { existsSync } from 'fs';


async function ensureDirectoryExists(dirPath: string) {
    if (!existsSync(dirPath)) {
        await mkdir(dirPath, { recursive: true });
    }
}

// Removemos a função extractFirstPageFromPDF pois não podemos usar PDF.js no servidor
// devido ao problema com DOMMatrix não estar definido no ambiente Node.js

// Função para criar uma capa com o título do livro (fallback)
async function createCoverFromTitle(title: string): Promise<Buffer> {
    try {
        const width = 800;
        const height = 1200;

        const r = Math.floor(Math.random() * 100) + 155;
        const g = Math.floor(Math.random() * 100) + 155;
        const b = Math.floor(Math.random() * 100) + 155;

        const r2 = (r + 128) % 256;
        const g2 = (g + 128) % 256;
        const b2 = (b + 128) % 256;

        // Limita a 2 linhas com no máximo 20 caracteres cada
        const maxChars = 20;
        let line1 = '';
        let line2 = '';

        if (title.length > maxChars * 2) {
            title = title.substring(0, maxChars * 2 - 3) + '...';
        }

        const words = title.split(' ');
        for (const word of words) {
            if ((line1 + ' ' + word).trim().length <= maxChars) {
                line1 += (line1 ? ' ' : '') + word;
            } else if ((line2 + ' ' + word).trim().length <= maxChars) {
                line2 += (line2 ? ' ' : '') + word;
            }
        }

        const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(${r},${g},${b});stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(${r - 40},${g - 40},${b - 40});stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect x="100" y="100" width="600" height="1000" fill="rgba(255,255,255,0.1)" rx="20" />
  <rect x="150" y="150" width="500" height="900" fill="rgba(255,255,255,0.05)" rx="10" />
  <circle cx="400" cy="400" r="150" fill="rgba(${r2},${g2},${b2},0.2)" />
  
  <text x="50%" y="43%" font-family="Arial, sans-serif" font-size="60" font-weight="bold" text-anchor="middle" fill="#fff">
    ${line1}
  </text>
  ${line2 ? `
    <text x="50%" y="49%" font-family="Arial, sans-serif" font-size="50" font-weight="bold" text-anchor="middle" fill="#fff">
      ${line2}
    </text>` : ''
            }

  <text x="50%" y="58%" font-family="Arial, sans-serif" font-size="50" text-anchor="middle" fill="rgba(255,255,255,0.8)">
    Lettuno
  </text>

  <rect x="200" y="700" width="400" height="5" fill="rgba(255,255,255,0.5)" rx="2" />
  <rect x="250" y="730" width="300" height="5" fill="rgba(255,255,255,0.3)" rx="2" />
  <rect x="300" y="760" width="200" height="5" fill="rgba(255,255,255,0.2)" rx="2" />
</svg>`;

        const svgBuffer = Buffer.from(svg);
        const imageBuffer = await sharp(svgBuffer).jpeg({ quality: 90 }).toBuffer();

        return imageBuffer;
    } catch (error) {
        console.error('Erro ao criar capa:', error);
        throw error;
    }
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const isPDF = formData.get('isPDF') === 'true';
        const title = formData.get('title') as string || 'Livro';

        if (!file && !isPDF) {
            return NextResponse.json(
                { error: 'Nenhum arquivo foi enviado' },
                { status: 400 }
            );
        }

        let processedBuffer;

        if (isPDF) {
            try {
                // Verifica se foi enviado um arquivo PDF para gerar a capa
                const pdfFile = formData.get('pdfFile') as File;

                if (pdfFile) {
                    // Não tentamos mais extrair a primeira página do PDF
                    // Em vez disso, criamos uma capa com o título do livro
                    processedBuffer = await createCoverFromTitle(title);
                } else {
                    // Se não tiver o arquivo PDF, busca o arquivo no caminho fornecido
                    const pdfPath = formData.get('pdfPath') as string;

                    if (pdfPath) {
                        // Criamos uma capa com o título do livro
                        processedBuffer = await createCoverFromTitle(title);
                    } else {
                        // Se não tiver nem arquivo nem caminho, cria uma capa com o título
                        processedBuffer = await createCoverFromTitle(title);
                    }
                }
            } catch (error) {
                console.error('Falha ao criar capa para o PDF:', error);
                // Se falhar, usa uma imagem padrão
                const defaultCoverPath = join(process.cwd(), 'public', 'covers', 'default-cover.jpg');
                const defaultBuffer = await readFile(defaultCoverPath);
                processedBuffer = defaultBuffer;
            }
        } else {
            // Processa a imagem enviada com sharp
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            processedBuffer = await sharp(buffer)
                .resize(800, 1200, { // Dimensões adequadas para capa de livro
                    fit: 'cover',
                    position: 'center'
                })
                .jpeg({ quality: 80 })
                .toBuffer();
        }

        // Gera um nome único para o arquivo
        const timestamp = Date.now();
        const fileName = `${timestamp}-cover.jpg`;
        const coversDir = join(process.cwd(), 'public', 'covers');

        // Garante que o diretório existe
        await ensureDirectoryExists(coversDir);

        const filePath = join(coversDir, fileName);
        const publicPath = `/covers/${fileName}`;

        // Salva o arquivo
        await writeFile(filePath, processedBuffer);

        return NextResponse.json({ coverPath: publicPath });
    } catch (error) {
        console.error('Erro ao processar upload:', error);
        return NextResponse.json(
            { error: 'Erro ao processar o upload do arquivo' },
            { status: 500 }
        );
    }
}