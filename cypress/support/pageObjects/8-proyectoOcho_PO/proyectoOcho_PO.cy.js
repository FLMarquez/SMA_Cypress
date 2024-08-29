import 'cypress-iframe';
require('cypress-downloadfile/lib/downloadFileCommand');
class ProyectoOcho_Po{

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
    
      SeccionDos(cajero,caja,clave, t) {
        let tiempo = t;
        
       
        // Navegación por el menú
        cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("(//span[contains(.,'Cajas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("//span[contains(.,'Apertura De Caja')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.wait(tiempo);
        cy.xpath("//span[@id='TITLE']").should('be.visible').contains('Apertura de Caja')
        cy.wait(tiempo)
        cy.xpath("//label[contains(@for,'vCAJEROID')]").should('be.visible').contains('Cajero')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vCAJAID']").should('be.visible').contains('Caja')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vCJDFECHAAPERTURA']").should('be.visible').contains('Fecha Cobro')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'TEXTBLOCK_VAR_CODIGOAUTORIZACION')]").should('be.visible').contains('Clave del Cajero')
        cy.wait(tiempo)
        cy.get('#ACEPTAR').should('be.visible')
        cy.wait(tiempo)     

        cy.xpath("//select[contains(@id,'vCAJEROID')]").select(cajero, { force: true})
        cy.wait(tiempo)
        cy.xpath("//select[contains(@id,'vCAJAID')]").select(caja, { force: true})
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'vCODIGOAUTORIZACION')]").should('be.visible').type(clave);
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'ACEPTAR')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        

        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//span[contains(.,'Apertura Autorizada - Puesto Diario Abierto')]").should('be.visible')
        .contains('Apertura Autorizada - Puesto Diario Abierto')
        .xpath("//input[contains(@id,'ACTION')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        });

        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES').should('be.visible').contains('Datos Caja-Cajero')
        cy.wait(tiempo)
        
        cy.get('#TABLE_CONTAINER_CAANROCAJA > .form-group > .gx-label').should('be.visible').contains('Identificación Caja')
        cy.wait(tiempo)
        
        cy.xpath("//span[contains(@id,'TEXTBLOCK_VAR_CJDFECHAAPERTURA')]").should('be.visible').contains('Fecha Apertura')
        cy.wait(tiempo)
        
        cy.xpath("//span[contains(@id,'ATTRIBUTES1')]").should('be.visible').contains('Datos Pagos')
        cy.wait(tiempo)
        cy.xpath("//label[contains(.,'Código de Barra')]").should('be.visible').contains('Código de Barra')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'CDPBOANROREGISTRO')]").should('be.visible').contains('Nro. Comprobante')
        cy.wait(tiempo)
        cy.xpath("//span[contains(.,'Boleto')]").should('be.visible').contains('Boleto')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Importe')])[1]").should('be.visible').contains('Importe')
        cy.wait(tiempo)
        cy.xpath("//label[contains(.,'Total a Pagar')]").should('be.visible').contains('Total a Pagar')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vSALDOMP']").should('be.visible').contains('Saldo')
        cy.wait(tiempo)

        cy.xpath("//span[contains(@id,'TEXTBLOCK_ATTRIBUTES_ATTRIBUTES2')]").should('be.visible').contains('Medios de Pago')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'TEXTBLOCK_VAR_MPGID')]").should('be.visible').contains('Medio de Pago')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vMNDID']").should('be.visible').contains('Moneda')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'MTOREDONDEO_VAR_LEFTTEXT')]").should('be.visible').contains('Redondeo')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'MTOCONTADO_VAR_LEFTTEXT')]").should('be.visible').contains('Monto')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'MTOVUELTO_VAR_LEFTTEXT')]").should('be.visible').contains('Vuelto')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'TOTALCDO_VAR_LEFTTEXT')]").should('be.visible').contains('Total')
        cy.wait(tiempo)
        
        cy.get('#BUTTON6').should('be.visible')
        cy.wait(tiempo) 
        
        cy.xpath("(//span[contains(.,'Medio de Pago')])[2]").should('be.visible').contains('Medio de Pago')
        cy.wait(tiempo)
        cy.xpath("//span[contains(.,'Importe Asignado')]").should('be.visible').contains('Importe Asignado')
        cy.wait(tiempo)

        cy.get('#BTNGRABARPAGO').should('be.visible')
        cy.wait(tiempo) 
        cy.get('#BUTTON7').should('be.visible')
        cy.wait(tiempo) 
        //});

      }

      // Nuevo método para llenar el código de barras
    llenarCodigoDeBarras(codigo,t) {
      let tiempo = t;
      cy.get('#vCDPCODIGOBARRA').type(codigo);
      cy.wait(tiempo);
      cy.xpath("//input[contains(@id,'CODBARRA')]").should('be.visible').click({force: true});
      cy.wait(tiempo);
      
      cy.xpath("//input[contains(@id,'CODBARRA')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

    }

    SeccionTres(medioPago,moneda,t) {
      let tiempo = t;
      cy.xpath("//select[contains(@id,'vMPGID')]").select(medioPago, { force: true})
      cy.wait(tiempo)
      cy.xpath("//select[contains(@id,'vMNDID')]").select(moneda, { force: true})
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'BUTTON6')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'BTNGRABARPAGO')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Desea confirmar el pago?');
        return true; // Esto simula hacer clic en "Aceptar"
        


    });

    cy.wait(tiempo)
    cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
      cy.wrap($iframe)
      .xpath("//span[contains(@id,'TEXTBLOCK')]").should('be.visible')
      .contains('&caaimprimeticket: N')
      .xpath("//input[contains(@id,'BUTTON1')]").should('be.visible').click({force: true});
      cy.wait(5000)

  });

 /*  cy.iframe('#gxp1_ifrm').should('exist').then($iframe => {
  cy.wrap($iframe)
  cy.xpath("//span[@class='Label'][contains(.,'El pago se realizó con éxito')]").invoke('show').click({force: true}).contains('El pago se realizó con éxito');
  cy.wait(tiempo)
  cy.get('#gxp0_gxtitle').parent() // Navega al contenedor padre del popup
  .contains('Aceptar') // Busca el botón "Aceptar"
  .click(); // Haz clic en el botón "Aceptar" 
  }); */

        cy.wait(tiempo)

        cy.xpath("//a[contains(.,'DS')]").should('be.visible')
        .click({force: true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible')
        .click({force: true})
        

      }
      
        
    }//final

export default ProyectoOcho_Po