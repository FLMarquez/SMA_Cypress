
class ProyectoDos_Po{

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
        cy.get('.K2BT_TagsCollectionEmptyMessage').should('be.visible').contains('No hay filtros aplicados')
        cy.wait(tiempo)
        cy.get('#INSERTP').should('be.visible')
        cy.wait(tiempo)
        cy.get('#INSERTJ').should('be.visible')
        cy.wait(tiempo)
        cy.xpath('(//span[contains(.,"CUIT")])[2]').should('be.visible').contains('CUIT')
        cy.wait(tiempo)
        cy.xpath('(//span[contains(.,"Documento")])[4]').should('be.visible').contains('Documento')
        cy.wait(tiempo)
        cy.xpath('(//span[contains(.,"Apellido")])[2]').should('be.visible').contains('Apellido')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Nombre')])[2]").should('be.visible').contains('Nombre')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Fecha de Nacimiento')])[2]").should('be.visible').contains('Fecha de Nacimiento')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Fecha de Fallecimiento')])[2]").should('be.visible').contains('Fecha de Fallecimiento')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Género')])[2]").should('be.visible').contains('Género')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Tipo Personeria')])[2]").should('be.visible').contains('Tipo Personeria')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Fecha de Inicio')])[2]").should('be.visible').contains('Fecha de Inicio')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Fecha de Fin')])[2]").should('be.visible').contains('Fecha de Fin')
        cy.wait(tiempo)

        // Esperar a que cargue la nueva página
        cy.wait(tiempo);

        // Búsqueda de una persona
        cy.xpath("//input[contains(@id,'vK2BTOOLSGENERICSEARCHFIELD')]").should("be.visible",{timeout:5000}).type(cuit);
        cy.wait(tiempo);
        cy.xpath("//img[contains(@alt,'Ver')]").should('exist').click({ force: true })

        // Navegación por las pestañas
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel1').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#GRIDTITLE_GRID').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel2').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#GRIDTITLE_GRID1').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel3').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#GRIDTITLE_GRID2').should("be.visible"),
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel4').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#GRIDTITLE_GRID3').should("be.visible"),    
    
        cy.wait(tiempo);
    
        cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        
        
      }
    }//final

export default ProyectoDos_Po