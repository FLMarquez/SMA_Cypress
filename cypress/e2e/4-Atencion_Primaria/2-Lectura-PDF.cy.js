const path = require('path'); // Asegúrate de tener esta línea al principio

describe('Test de extracción de texto de PDF', () => {
    it('Extrae texto de un archivo PDF y valida', () => {
        // Usa la ruta absoluta directamente o asegúrate de que downloadDirectory esté configurado
        const pdfFilePath = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\GC_Cypress_Pipeline\\cypress\\downloads\\aadeudacontadosellados2_impl.pdf';

        cy.task('parsePdf', { filePath: pdfFilePath })
        .then((extractedText) => {
            // Normalizar el texto extraído
            const normalizedText = extractedText.replace(/\s+/g, ' ').trim();

            cy.log(normalizedText);

            // Obtener la fecha de hoy en formato dd/mm/yy
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = String(today.getFullYear()).slice(-2, '0');
            const formattedDate = `${day}/${month}/${year}`;

            // Validaciones con texto normalizado
            expect(normalizedText).to.include('Usuario: admin');
            expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('Infractor S/D');
            expect(normalizedText).to.include('99900000014');
            expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('TOTALES');
            expect(normalizedText).to.include('ACTA DE DEUDA');
            expect(normalizedText).to.include('CONCEPTOS');
            expect(normalizedText).to.include('NRO. ACTA');
            expect(normalizedText).to.include('PERIODO/CUOTA');
            expect(normalizedText).to.include('IMPORTE');
            expect(normalizedText).to.include('INTERÉS');
            expect(normalizedText).to.include('ACTA');
        });
    });
});

