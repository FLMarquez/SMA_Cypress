import ProyectoOcho_Po from '../../support/pageObjects/8-proyectoOcho_PO/proyectoOcho_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Caja_Apertura_Caja', () => {

    const master=new ProyectoOcho_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Caja_Apertura_Caja', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",1000) 
    master.SeccionDos("DSIMONCINI","1","123456789",1000)
    
   
    
    const pdfPath = 'cypress/downloads/aadeudacontadosellados2_impl.pdf'; 

        cy.readPDF(pdfPath).then((text) => {
            const dato = extraerDato(text); 

           // Verifica que 'dato' no sea null antes de intentar usarlo
        if (dato) {
            cy.log('Dato extraído del PDF: ' + dato);
            master.llenarCodigoDeBarras(dato, 1000);
        } else {
            // Si 'dato' es null, lanza un error o maneja la situación adecuadamente
            cy.log('No se pudo extraer un dato válido del PDF');
            throw new Error('Dato extraído es null o no se encontró en el PDF.');
        }
    });



    function extraerDato(text) {
        const regex = /\b\d{56}\b/;
        const match = text.match(regex);
        return match ? match[0] : null;
    }

    master.SeccionTres("EFECTIVO","PESOS",1000)
   
       
});

});