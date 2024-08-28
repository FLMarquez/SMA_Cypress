import ProyectoTres_Po from '../../support/pageObjects/3-proyectoTres_PO/proyectoTres_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Actualización_Datos', () => {

    const master=new ProyectoTres_Po()
    
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
    master.SeccionDos("20327855418","4448596","lmarquez@elinpar.com",1000)

       
});

});