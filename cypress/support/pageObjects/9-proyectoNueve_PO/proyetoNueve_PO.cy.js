import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');
class ProyectoNueve_Po{

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
    
      SeccionDos(t) {
        let tiempo = t;
        
       
        // Navegación por el menú
        cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("(//span[contains(.,'Cajas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("//span[contains(.,'Cierre De Caja')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.xpath('//*[@id="vCIERRECAJA_ACTION_0001"]').invoke('show').click({force: true});

        cy.wait(tiempo)

        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
            cy.wrap($iframe)
            .xpath("//*[@id='span_vLEYENDA']").should('be.visible')
            .contains('La caja 1 se cerró correctamente')
            .xpath("//*[@id='ACTION']").should('be.visible').click({force: true});
               
        });

        cy.wait(tiempo);
                
        cy.xpath("//a[contains(.,'DS')]").should('be.visible')
        .click({force: true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible')
        .click({force: true})

          }
      
        
    }//final

export default ProyectoNueve_Po



