
import ProyectoNueve_Po from '../../support/pageObjects/9-proyectoNueve_PO/proyetoNueve_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Caja_Cierre_Caja', () => {

    const master=new ProyectoNueve_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Caja_Cierre_Caja', () => {        
    master.SeccionUno("dsimoncini","dsimoncini",1000) 
    master.SeccionDos(1000)   
       
});

});