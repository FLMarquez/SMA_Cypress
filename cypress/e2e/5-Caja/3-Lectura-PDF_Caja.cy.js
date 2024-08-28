const path = require('path');

describe('Test de extracción de texto de PDF', () => {
    
        it('Extrae texto de un archivo PDF y valida', () => {
            // Usa la ruta absoluta directamente o asegúrate de que downloadDirectory esté configurado
            const pdfFilePath = 'C:\\Users\\Lmarquez\\Downloads\\aprcrecaudacionxcajero_impl.pdf';

        cy.task('parsePdf', { filePath: pdfFilePath })
        .then((extractedText) => {
            // Normalizar el texto extraído
            const normalizedText = extractedText.replace(/\s+/g, ' ').trim();

            cy.log(normalizedText);

            // Obtener la fecha de hoy en formato dd/mm/yy
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = String(today.getFullYear()).slice(-2);
            const formattedDate = `${day}/${month}/${year}`;

            // Validaciones con texto normalizado
            expect(normalizedText).to.include('Resumen de Cobranzas Por Caja');
            // expect(normalizedText).to.include(`${formattedDate}`);
            // expect(normalizedText).to.include('2400009838');
            expect(normalizedText).to.include('Fecha apertura:');
            expect(normalizedText).to.include('Fecha Cierre:');
            // expect(normalizedText).to.include(`${formattedDate}`);
            expect(normalizedText).to.include('Contribuyente');
            expect(normalizedText).to.include('Imp.Original Desc/Rec');
            // expect(normalizedText).to.include('1000000002');
            // expect(normalizedText).to.include('16.409,09');
            expect(normalizedText).to.include('Tipo Liquidación');
            expect(normalizedText).to.include('Importe');
            expect(normalizedText).to.include('Subtotal:');
            expect(normalizedText).to.include('Total Redondeo:');
            expect(normalizedText).to.include('Importe Total:');
            expect(normalizedText).to.include('Total Cupones:');
        });
    });
    });
    


