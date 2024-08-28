class ProyectoCinco_Po{

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
    
      SeccionDos(objeto, t) {
        let tiempo = t;
       
        // Navegación por el menú
        cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("(//span[contains(.,'Objetos')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("//span[@class='sidebar-nav-item'][contains(.,'Consulta Objetos')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#TITLE').should('be.visible').contains('Consulta de Objetos')
        cy.wait(tiempo)
        cy.get('.K2BT_TagsCollectionEmptyMessage').should('be.visible').contains('No hay filtros aplicados')
        cy.wait(tiempo)
        cy.get('#GRIDSETTINGS_LABELGRID1').should('be.visible')
        cy.wait(tiempo)
        cy.get('#LAYOUTDEFINED_DOWNLOADSACTIONTOGGLE_GRID1').should('be.visible')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Tipo Objeto')])[2]").should('be.visible').contains('Tipo Objeto')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Objeto')])[8]").should('be.visible').contains('Objeto')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Identificador 2')])[2]").should('be.visible').contains('Identificador 2')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Actividad')])[4]").should('be.visible').contains('Actividad')
        cy.wait(tiempo)
        cy.xpath("//span[contains(.,'Responsable')]").should('be.visible').contains('Responsable')
        cy.wait(tiempo)
        cy.xpath("//span[contains(.,'CUIT')]").should('be.visible').contains('CUIT')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Tipo Domicilio')])[2]").should('be.visible').contains('Tipo Domicilio')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Calle')])[3]").should('be.visible').contains('Calle')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Nro')])[2]").should('be.visible').contains('Nro')
        cy.wait(tiempo)
       

        // Esperar a que cargue la nueva página
        cy.wait(tiempo);

        // Búsqueda de una persona
        cy.xpath("//input[@id='vGENERICFILTER_GRID1']").should("be.visible",{timeout:5000}).type(objeto).type('{enter}');
        cy.wait(tiempo);
        cy.xpath("//img[@id='vDISPLAY_ACTION_0001']").should('exist').click({ force: true })

        // Navegación por las pestañas
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel1').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES1').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel2').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES2').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel3').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES3').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel4').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES4').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel5').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES5').should("be.visible"),
    
        cy.wait(tiempo);
    
       cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').click({force: true})
       cy.wait(tiempo)
       cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').click({force: true})
       cy.wait(tiempo)
        
        
      }
    }//final

export default ProyectoCinco_Po