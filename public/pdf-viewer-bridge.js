/**
 * PDF Viewer Bridge Script
 * 
 * Este script facilita a comunicação entre o visualizador de PDF no iframe
 * e o componente React que o hospeda.
 * 
 * Ele detecta eventos de mudança de página e envia informações sobre o PDF
 * para o componente pai através de postMessage.
 */

// Função que será executada quando o PDF for carregado
function setupPdfBridge() {
    // Verificar se o PDF.js está disponível
    if (typeof PDFViewerApplication !== 'undefined') {
        // Aguardar até que o PDF esteja completamente carregado
        PDFViewerApplication.initializedPromise.then(() => {
            const pdfViewer = PDFViewerApplication.pdfViewer;

            // Enviar informações iniciais sobre o PDF
            if (PDFViewerApplication.pdfDocument) {
                window.parent.postMessage({
                    type: 'pdf-info',
                    totalPages: PDFViewerApplication.pagesCount,
                    currentPage: pdfViewer.currentPageNumber
                }, '*');
            }

            // Monitorar mudanças de página
            const pageChangeListener = () => {
                window.parent.postMessage({
                    type: 'pdf-info',
                    currentPage: pdfViewer.currentPageNumber
                }, '*');
            };

            // Adicionar listener para eventos de mudança de página
            pdfViewer.eventBus.on('pagechanging', pageChangeListener);

            // Escutar mensagens do componente pai
            window.addEventListener('message', (event) => {
                if (event.data && event.data.action === 'navigateTo' && event.data.page) {
                    // Navegar para a página especificada
                    PDFViewerApplication.page = event.data.page;
                }
            });
        });
    }
}

// Executar a função quando o documento estiver pronto
if (document.readyState === 'complete') {
    setupPdfBridge();
} else {
    document.addEventListener('DOMContentLoaded', setupPdfBridge);
}

// Adicionar um fallback para quando o PDF.js terminar de carregar
window.addEventListener('webviewerloaded', setupPdfBridge);