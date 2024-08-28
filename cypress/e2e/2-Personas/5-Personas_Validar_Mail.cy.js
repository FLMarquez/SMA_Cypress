//NumeroActa: Dato Prueba -----AAA999

import ProyectoSiete_Po from '../../support/pageObjects/7-proyectoSiete_PO/proyectoSiete_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Validar_Mail', () => {

    const master=new ProyectoSiete_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Usuario y Contraseña Válido', () => {        
    master.SeccionUno("admin","admin123",1000) 
    master.SeccionDos("20327855418",1000)   
       
});

});