import ProyectoUno_Po from '../../support/pageObjects/1-proyectoUno_PO/proyectoUno_PO.cy'

/// <reference types='cypress' />
require('cypress-xpath')


describe('Login_SMA', () => {

    const master=new ProyectoUno_Po()
    
    master.visitHome()

Cypress.on('ubcaugth:exception', (err, runnable)=> {
    return false;
})

it('Usuario y Contraseña Válido', () => {        
    master.SeccionUno("admin","admin123",1000)    
       
});

it('Usuario válido y contraseña no válida', () => {    
    master.SeccionUno("admin","12345",1000)
    cy.Validar_Campo("//div[@class='toast-message'][contains(.,'Usuario o contraseña incorrectos')]", "Usuario o contraseña incorrectos","Contraseña")

});

it('Usuario no válido y contraseña válida', () => {    
    master.SeccionUno("admin1","admin123",1000)
    cy.Validar_Campo("//div[@class='toast-message'][contains(.,'Usuario o contraseña incorrectos')]", "Usuario o contraseña incorrectos","Usuario")
});

it('Usuario no válido y contraseña no válida', () => {
    master.SeccionUno("admin1234","12346",1000)
    cy.Validar_Campo("//div[@class='toast-message'][contains(.,'Usuario o contraseña incorrectos')]", "Usuario o contraseña incorrectos","Usuario y Contraseña")
    
});

it('Usuario vacio y contraseña válida', () => {    
    master.SeccionUno("","admin123",1000)
    cy.Validar_Campo("//div[@class='toast-message'][contains(.,'Usuario o contraseña incorrectos')]", "Usuario o contraseña incorrectos","Usuario")
});

it('Usuario válido y contraseña vacía', () => { 
    master.SeccionUno("admin","",1000)
    cy.Validar_Campo("//div[@class='toast-message'][contains(.,'Usuario o contraseña incorrectos')]", "Usuario o contraseña incorrectos","Contraseña")
});


});


