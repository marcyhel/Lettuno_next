'use client';

import { Book } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, BookOpen } from 'lucide-react';
import { PdfViewer } from "./pdf-viewer";
import { useState } from "react";
import { useSession } from 'next-auth/react';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface BookModalProps {
    book: Book | null;
    onClose: () => void;
    readingProgress: { [bookId: string]: number };
    onSaveProgress: (bookId: string, page: number) => void;
}

export function BookModal({ book, readingProgress, onSaveProgress }: BookModalProps) {
    const [showPdfViewer, setShowPdfViewer] = useState(false);
    // const session = auth()
    const { data: session, status } = useSession();
    console.log('session', session, status)
    if (!book) return null;

    return (
        <DialogContent className="sm:max-w-[800px] max-w-[350px] p-0 overflow-hidden" style={{ maxWidth: showPdfViewer ? '90vw' : '800px', maxHeight: showPdfViewer ? '90vh' : 'auto' }}>
            <VisuallyHidden.Root>
                <DialogTitle>{book.title || 'Detalhes do Livro'}</DialogTitle>
            </VisuallyHidden.Root>
            {showPdfViewer && book?.filePath ? (
                <PdfViewer
                    book={book}
                    onClose={() => setShowPdfViewer(false)}
                    initialPage={readingProgress[book.id] || 1}
                    onSaveProgress={onSaveProgress}
                />
            ) : (
                <div className="flex flex-col md:flex-row">
                    {/* imagem */}
                    <div className="md:w-[300px] w-full md:h-full h-[400px] aspect-[2/3] overflow-hidden bg-gray-100">
                        <img
                            src={book?.coverPath || book?.cover || ''}
                            alt={book.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* conteúdo */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">{book.title}</h2>

                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Autor: {book.author}</span>
                                <span>Categoria: {book.category?.name ?? 'Sem categoria'}</span>
                            </div>

                            <div className="text-sm text-justify">
                                {book.description}
                            </div>

                            {book.price && (
                                <p className="text-sm font-medium mt-2">
                                    Preço: R$ {book.price.toFixed(2)}
                                </p>
                            )}

                            {book.rating && (
                                <p className="text-sm">
                                    Avaliação: {book.rating}/5 ({book.reviewCount} avaliações)
                                </p>
                            )}
                        </div>

                        <div className="mt-6 space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                {session?.user.subscriptionPlan == process.env.NEXT_PUBLIC_PRODUCT_PREMIUM ?
                                    <Button
                                        className="w-full"
                                        onClick={() => book.filePath && window.open(book.filePath, '_blank')}
                                        disabled={!book.filePath}
                                    >
                                        <Download className="mr-2 h-4 w-4" /> Baixar
                                    </Button> :
                                    <Button
                                        className="w-full"
                                        onClick={() => { }}
                                        disabled={true}
                                    >
                                        <Download className="mr-2 h-4 w-4" /> Baixar
                                    </Button>
                                }
                                {session?.user.subscriptionPlan == process.env.NEXT_PUBLIC_PRODUCT_BASIC || session?.user.subscriptionPlan == process.env.NEXT_PUBLIC_PRODUCT_PREMIUM ?
                                    <Button
                                        className="w-full"
                                        onClick={() => {
                                            if (book.filePath) {
                                                setShowPdfViewer(true);
                                            }
                                        }}
                                        disabled={!book.filePath}
                                        variant="outline"
                                    >
                                        <BookOpen className="mr-2 h-4 w-4" /> Ler PDF
                                    </Button> :
                                    <Button
                                        className="w-full"
                                        onClick={() => {

                                        }}
                                        disabled={true}
                                        variant="outline"
                                    >
                                        <BookOpen className="mr-2 h-4 w-4" /> Ler PDF
                                    </Button>
                                }

                            </div>
                            {!book.filePath && (
                                <p className="text-sm text-center text-muted-foreground">Livro não disponível para download ou leitura</p>
                            )}
                        </div>
                    </div>
                </div>
            )
            }
        </DialogContent >
    );
}

export default BookModal;