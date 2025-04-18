/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Book } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Save, Maximize } from 'lucide-react';
import { useState, useRef, useEffect } from "react";

interface PdfViewerProps {
    book: Book;
    onClose: () => void;
    initialPage: number;
    onSaveProgress: (bookId: string, page: number) => void;
}

export function PdfViewer({ book, onClose, initialPage, onSaveProgress }: PdfViewerProps) {
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const [totalPages, setTotalPages] = useState<number>(0);
    const pdfViewerRef = useRef<HTMLIFrameElement>(null);

    // Função para navegar entre páginas do PDF
    const navigatePdfPage = (direction: 'next' | 'prev') => {
        if (!pdfViewerRef.current) return;

        const iframe = pdfViewerRef.current;
        const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;

        if (newPage > 0 && newPage <= totalPages) {
            iframe.contentWindow?.postMessage({
                action: 'navigateTo',
                page: newPage
            }, '*');
            setCurrentPage(newPage);
            onSaveProgress(book.id, newPage);
        }
    };

    // Função para detectar eventos de mensagem do iframe do PDF
    useEffect(() => {
        const handlePdfMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === 'pdf-info') {
                if (event.data.totalPages) {
                    setTotalPages(event.data.totalPages);
                }
                if (event.data.currentPage) {
                    setCurrentPage(event.data.currentPage);
                    onSaveProgress(book.id, event.data.currentPage);
                }
            }
        };

        window.addEventListener('message', handlePdfMessage);
        return () => window.removeEventListener('message', handlePdfMessage);
    }, [book.id, onSaveProgress]);

    // Função para ativar tela cheia
    const enterFullscreen = () => {
        const iframe = pdfViewerRef.current;
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if ((iframe as any).webkitRequestFullscreen) {
                (iframe as any).webkitRequestFullscreen(); // Safari
            } else if ((iframe as any).mozRequestFullScreen) {
                (iframe as any).mozRequestFullScreen(); // Firefox
            } else if ((iframe as any).msRequestFullscreen) {
                (iframe as any).msRequestFullscreen(); // IE/Edge
            }
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center space-x-2">
                    <h2 className="text-xl font-semibold">{book.title}</h2>
                    <span className="text-sm text-muted-foreground">
                        Página {currentPage} de {totalPages || '?'}
                    </span>
                </div>
                <div className="flex items-center space-x-2 mr-6">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigatePdfPage('prev')}
                        disabled={currentPage <= 1}
                    >
                        <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigatePdfPage('next')}
                        disabled={currentPage >= totalPages}
                    >
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onSaveProgress(book.id, currentPage)}
                        title="Salvar progresso"
                    >
                        <Save className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={enterFullscreen}
                        title="Tela cheia"
                    >
                        <Maximize className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Voltar</Button>
                </div>
            </div>
            <div className="flex-1 w-full h-[80vh]">
                <iframe
                    ref={pdfViewerRef}
                    src={`${book.filePath}#page=${initialPage}&toolbar=1&navpanes=1`}
                    className="w-full h-screen border-0"
                    title={`PDF Viewer - ${book.title}`}
                    allow="fullscreen"
                />
            </div>
        </div>
    );
}
