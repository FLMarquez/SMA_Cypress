import ProyectoTres_Generar_Cuit_Cuil_Po from '../../support/pageObjects/3-proyectoTres_PO/proyectoTres_Generar_Cuit_Cuil_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Personas_Generar Cuit_Cuil', () => {

    const master=new ProyectoTres_Generar_Cuit_Cuil_Po()
    
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
    master.SeccionDos("32785541",1000)

       
});

});