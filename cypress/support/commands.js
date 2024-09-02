// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login_SMA', (usuario,contrasena,t) => {
    let tiempo = t
    cy.visit('https://test.elinpar.com/saemsma/com.ktksuitelr.k2bfsg.login')  
       
    if (usuario !== "") {
      cy.get('#vUSERNAME').should("be.visible",{timeout:5000}).type(usuario);
      }
      if (contrasena !== "") {
      cy.get('#vUSERPASSWORD').should("be.visible",{timeout:5000}).type(contrasena);
      }
      cy.wait(tiempo);
      //HACER CLIC EN EL BOTÓN INICIAR SESIÓN
      cy.get('#LOGIN').should("be.visible",{timeout:5000}).click() 
      cy.wait(tiempo)    


    

})


Cypress.Commands.add('Validar_Campo', (selector,men,nombre_campo,t) => {
    cy.xpath(selector).should('be.visible').should("contain", men).then((val)=>{
            cy.log("*************************")
            cy.log("El/La o Los/Las " + nombre_campo + " son Incorrectos")
            cy.log("*************************")       
    });
  
})

Cypress.Commands.add('readPDF', (filePath) => {
  return cy.task('parsePdf', { filePath });
});


require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  // Obtiene el cuerpo del iframe después de que esté cargado
  return cy
    .get(iframeSelector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap);
});


