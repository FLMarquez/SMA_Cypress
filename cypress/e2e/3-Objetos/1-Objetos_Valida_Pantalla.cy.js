//NumeroObjeto: Dato Prueba -----AAA999

import ProyectoCinco_Po from '../../support/pageObjects/5-proyectoCinco_PO/proyectoCinco_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Valida_Pantalla', () => {

    const master=new ProyectoCinco_Po()
    
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
    master.SeccionDos("AAA999",1000)   
       
});

});