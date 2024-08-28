import 'cypress-iframe'
class ProyectoSiete_Po{

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
    
      SeccionDos(cuit, t) {
        let tiempo = t;
       
        // Navegación por el menú
        cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("(//span[contains(.,'Personas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("//span[@class='sidebar-nav-item'][contains(.,'Administración de Personas')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#PGMDESCRIPTORTEXTBLOCK').should('be.visible').contains('Administración de Personas')
        cy.wait(tiempo)
        

        // Búsqueda de una persona
        cy.xpath("//input[contains(@id,'vK2BTOOLSGENERICSEARCHFIELD')]").should("be.visible",{timeout:5000}).type(cuit);
        cy.wait(tiempo);
        cy.xpath("//img[contains(@alt,'Ver')]").should('exist').click({ force: true })
        cy.wait(5000)
        
       //cy.iframe('col-xs-12').should('exist').then($iframe => {
       //cy.wrap($iframe)
       cy.get('#VALIDARE').should('be.visible').click({force: true})
       cy.wait(2000)
       //});
       

       cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//input[@id='BUTTON1']").should('be.visible').click({force: true});
        cy.wait(2000)
    });
    
    cy.iframe('#gxp1_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//span[contains(@id,'TEXTBLOCK')]").should('be.visible')
        .contains('Email enviado correctamente.')
        .xpath("//input[contains(@id,'BUTTON1')]").should('be.visible').click({force: true});
        cy.wait(2000)
    });
    
    
        cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        
        
      }
    }//final

export default ProyectoSiete_Po