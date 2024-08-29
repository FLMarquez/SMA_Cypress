import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');

class ProyectoCuatro_Po {
  visitHome() {
    let tiempo = 1000;
    beforeEach(() => {
      cy.visit('https://test.elinpar.com/saemsma/com.ktksuitelr.k2bfsg.login');
      cy.wait(tiempo);
    });
  }

  SeccionUno(usuario, contrasena, t) {
    let tiempo = t;
    if (usuario !== "") {
      cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible", { timeout: 5000 }).type(usuario);
    }
    if (contrasena !== "") {
      cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible", { timeout: 5000 }).type(contrasena);
    }
    cy.wait(tiempo);
    cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible", { timeout: 5000 }).click();
    cy.wait(tiempo);
  }

  SeccionDos(numeroActa, t) {
    let tiempo = t;
    cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").invoke('show').should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Emisión Deuda')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//span[contains(.,'Atención Primaria')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);
    cy.get('#vFILTROGENERAL').should("be.visible", { timeout: 5000 }).type(numeroActa);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@id,'BUSCAR')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//a[@class='ui right floated large blue label'][contains(.,'Consultar')]").invoke('show').click({force: true});
    cy.wait(tiempo);
    cy.xpath("//a[contains(@id,'TABSCONTROLContainerpanel1')][@href='#Tab_TabControl'][contains(.,'TASAS/SERVICIOS/OBJETOS')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'ACTUALIZAROBLIGACIONES')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);
    cy.xpath("(//label[contains(@for,'GRIDOBLIGACIONES')])[1]").should("be.visible", { timeout: 5000 }).click({ force: true });
    cy.wait(tiempo);

    cy.xpath("//input[@id='IMPRIMIRCONTADO']")
      .should("be.visible", { timeout: 5000 })
      .click({ force: true });      
    

    cy.wait(tiempo);

   cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').invoke('show').click({force: true})
   cy.wait(tiempo)
   cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').invoke('show').click({force: true})
   cy.wait(tiempo)
    
    
  }
}//final

export default ProyectoCuatro_Po;






  
