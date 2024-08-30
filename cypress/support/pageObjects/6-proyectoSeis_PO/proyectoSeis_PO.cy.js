import 'cypress-iframe'
class ProyectoSeis_Po{

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
    

      SeccionDos(cuit,tipoDomicilio,pais,provincia,departamento,localidad,cp,calle,numerocalle,barrio, t) {
        let tiempo = t;


        // Navegación por el menú
        cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("(//span[contains(.,'Personas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("//span[@class='sidebar-nav-item'][contains(.,'Administración de Personas')]").should("be.visible",{timeout:5000}).click({ force: true });
        
      
        // Búsqueda de una persona
        cy.xpath("//input[contains(@id,'vK2BTOOLSGENERICSEARCHFIELD')]").should("be.visible",{timeout:5000}).type(cuit);
        cy.wait(tiempo);

        cy.xpath("//img[contains(@alt,'Ver')]").should('exist').click({ force: true })
        cy.wait(tiempo)
        cy.get('#Tab_TABS_TABSCONTROLContainerpanel1').should("be.visible",{timeout:5000}).click({ force: true });
        cy.get('#GRIDTITLE_GRID').should("be.visible"),
        cy.wait(tiempo);
        cy.get('#INSERT').should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//select[contains(@id,'DTSID')]").select(tipoDomicilio, { force: true})
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//select[contains(@id,'PASID')]").select(pais, { force: true})
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//select[contains(@id,'PVIID')]").select(provincia, { force: true})
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//select[contains(@id,'DPTID')]").select(departamento, { force: true})
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//img[contains(@id,'vSEARCHLOCALIDADES')]").should("be.visible",{timeout:5000}).click({force: true})
        cy.wait(tiempo)
        });

        cy.wait(tiempo)
        cy.iframe('#gxp1_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//input[contains(@id,'vCLCLDESCRIPCION')]").should("be.visible",{timeout:5000}).type(localidad);
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//img[contains(@id,'vLINKSELECTION_0001')]").should("be.visible",{timeout:5000}).click({force: true})
        cy.wait(tiempo)

      });


      cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {

        cy.wrap($iframe)
        .xpath("//input[contains(@id,'DMCCP')]").should('be.visible').clear();
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//input[contains(@id,'DMCCP')]").should('be.visible').type(cp);
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//img[contains(@id,'vSEARCHCALLES')]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.iframe('#gxp1_ifrm').should('exist').then($iframe => {
          cy.wrap($iframe)
        .xpath("//img[@id='vLINKSELECTION_0001']").should('be.visible').click({force: true})
        cy.wait(tiempo)
        });
        
        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {

        cy.wrap($iframe)
        .xpath("//input[@id='DMCNRO']").should('be.visible').clear();
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//input[@id='DMCNRO']").should('be.visible').type(numerocalle);
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//select[contains(@id,'BARRIOID')]").select(barrio, { force: true})
        cy.wait(tiempo)

        cy.wrap($iframe)
        .xpath("//input[contains(@id,'CONFIRMARCARGA')]").click({force: true})
        cy.wait(tiempo)
        })

        cy.iframe('#gxp1_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//span[contains(@id,'TEXTBLOCK')]").should('be.visible').contains('El Domicilio fue Agregado con Exito')
        cy.wait(tiempo)


        cy.wrap($iframe)
        .xpath("//input[contains(@id,'BUTTON1')]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        });

        

        //cy.iframe('#gxp0_ifrm').should('exist').then($iframe2 => {
        //cy.wrap($iframe2)
        cy.xpath("//img[@id='LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID']").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //cy.wrap($iframe2)
        cy.xpath("//select[contains(@id,'vESTADODOMICILIO')]").select('ACTIVO', { force: true})
        cy.wait(tiempo)
        
        //cy.wrap($iframe2)
        cy.get('#LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID').should('be.visible').click({force: true})
        cy.wait(tiempo)
        
        //cy.wrap($iframe)
        cy.xpath("//span[contains(@id,'span_SDTVAR_SDTVARIABLE6_0001')]").should('be.visible').contains('1 DE MAYO')
        cy.wait(tiempo)

        //cy.wrap($iframe)
        cy.xpath("//img[contains(@id,'vDELETE_ACTION_0001')]").should('exist').click({force: true})
        cy.wait(tiempo)

        cy.iframe('#gxp0_ifrm').should('be.visible').then($iframe => {
        cy.wrap($iframe)
        .xpath("//input[contains(@id,'BUTTON1')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        });
        });

      //});
    
                
      cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').click({force: true})

   }

      
        
    }//final

export default ProyectoSeis_Po