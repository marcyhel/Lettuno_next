// Serviço para gerenciar uploads para o Firebase Storage
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase';
import sharp from 'sharp';

/**
 * Faz upload de um arquivo para o Firebase Storage
 * @param file Arquivo a ser enviado
 * @param path Caminho no Firebase Storage (ex: 'books', 'covers')
 * @returns URL do arquivo no Firebase Storage
 */
export async function uploadFileToFirebase(file: File, path: string): Promise<string> {
    try {
        // Gera um nome único para o arquivo
        const timestamp = Date.now();
        const fileName = `${timestamp}-${file.name}`;
        const fullPath = `${path}/${fileName}`;

        // Cria uma referência para o arquivo no Firebase Storage
        const storageRef = ref(storage, fullPath);

        // Converte o arquivo para um ArrayBuffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Faz o upload do arquivo
        const snapshot = await uploadBytes(storageRef, buffer);

        // Obtém a URL do arquivo
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error('Erro ao fazer upload para o Firebase:', error);
        throw new Error('Falha ao fazer upload do arquivo para o Firebase Storage');
    }
}

/**
 * Faz upload de um buffer para o Firebase Storage
 * @param buffer Buffer a ser enviado
 * @param path Caminho no Firebase Storage (ex: 'books', 'covers')
 * @param fileName Nome do arquivo
 * @returns URL do arquivo no Firebase Storage
 */
export async function uploadBufferToFirebase(buffer: Buffer, path: string, fileName: string): Promise<string> {
    try {
        // Gera um nome único para o arquivo
        const timestamp = Date.now();
        const fullPath = `${path}/${timestamp}-${fileName}`;

        // Cria uma referência para o arquivo no Firebase Storage
        const storageRef = ref(storage, fullPath);

        // Faz o upload do buffer
        const snapshot = await uploadBytes(storageRef, buffer);

        // Obtém a URL do arquivo
        const downloadURL = await getDownloadURL(snapshot.ref);

        return downloadURL;
    } catch (error) {
        console.error('Erro ao fazer upload para o Firebase:', error);
        throw new Error('Falha ao fazer upload do buffer para o Firebase Storage');
    }
}

/**
 * Exclui um arquivo do Firebase Storage
 * @param url URL do arquivo a ser excluído
 */
export async function deleteFileFromFirebase(url: string): Promise<void> {
    try {
        // Extrai o caminho do arquivo da URL
        const fileRef = ref(storage, url);

        // Exclui o arquivo
        await deleteObject(fileRef);
    } catch (error) {
        console.error('Erro ao excluir arquivo do Firebase:', error);
        throw new Error('Falha ao excluir arquivo do Firebase Storage');
    }
}

/**
 * Cria uma imagem de capa com o título do livro
 * @param title Título do livro
 * @returns Buffer da imagem gerada
 */
export async function createCoverFromTitle(title: string): Promise<Buffer> {
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