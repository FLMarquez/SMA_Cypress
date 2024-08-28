import ProyectoSeis_Po from '../../support/pageObjects/6-proyectoSeis_PO/proyectoSeis_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Crear_Nuevo_Domicilio', () => {

    const master=new ProyectoSeis_Po()
    
    master.visitHome()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Package is not defined')) {
          return false;
        }
        // otherwise, return true
        return false;
    
})

it('Personas_Crear_Nuevo_Domicilio', () => {        
    master.SeccionUno("admin","admin123",1000) 
    master.SeccionDos("20327855418","FISCAL","ARGENTINA","CORDOBA","CAPITAL","CORDOBA","5008","PRUEBA","5555","1 DE MAYO",1000)

       
});

});