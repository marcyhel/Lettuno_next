// Configuração do Firebase para o projeto
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
// NOTA: Estas credenciais devem ser substituídas pelas suas próprias credenciais do Firebase
// Você pode obtê-las no console do Firebase: https://console.firebase.google.com/
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firebase Storage
const storage = getStorage(app);

export { storage };