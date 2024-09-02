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
          cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible").type(usuario);
        }
        if (contrasena !== "") {
          cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible").type(contrasena);
        }
        
        cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible").click();
        
      }
    
      SeccionDos(cajero,caja,clave, t) {
        let tiempo = t;
        
        cy.get('#MENUTOGGLE_MPAGE').should("be.visible").click({ force: true });









       
        // Navegación por el menú
        cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("(//span[contains(.,'Cajas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.xpath("//span[contains(.,'Apertura De Caja')]").should("be.visible",{timeout:5000}).click({ force: true });
        cy.wait(tiempo);
        cy.xpath("//span[@id='TITLE']").should('be.visible', { timeout: 10000 }).contains('Apertura de Caja')
        cy.wait(tiempo)
        cy.xpath("//label[contains(@for,'vCAJEROID')]").should('be.visible', { timeout: 10000 }).contains('Cajero')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vCAJAID']").should('be.visible', { timeout: 10000 }).contains('Caja')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vCJDFECHAAPERTURA']").should('be.visible', { timeout: 10000 }).contains('Fecha Cobro')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'TEXTBLOCK_VAR_CODIGOAUTORIZACION')]").should('be.visible', { timeout: 10000 }).contains('Clave del Cajero')
        cy.wait(tiempo)
        cy.get('#ACEPTAR').should('be.visible', { timeout: 10000 })
        cy.wait(tiempo)     

        cy.xpath("//select[contains(@id,'vCAJEROID')]").should('be.visible', { timeout: 10000 }).select(cajero, { force: true})
        cy.wait(tiempo)
        cy.xpath("//select[contains(@id,'vCAJAID')]").should('be.visible', { timeout: 10000 }).select(caja, { force: true})
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'vCODIGOAUTORIZACION')]").should('be.visible', { timeout: 10000 }).type(clave);
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'ACEPTAR')]").should('be.visible', { timeout: 10000 }).click({force: true})
        cy.wait(tiempo)
        

        cy.iframe('#gxp0_ifrm').should('exist', { timeout: 10000 }).then($iframe => {
        cy.wrap($iframe)
        .xpath("//span[contains(.,'Apertura Autorizada - Puesto Diario Abierto')]").should('be.visible', { timeout: 10000 })
        .contains('Apertura Autorizada - Puesto Diario Abierto')
        .xpath("//input[contains(@id,'ACTION')]").should('be.visible', { timeout: 10000 }).click({force: true})
        cy.wait(tiempo)
        });

        cy.get('#TEXTBLOCK_ATTRIBUTES_ATTRIBUTES').should('be.visible', { timeout: 10000 }).contains('Datos Caja-Cajero')
        cy.wait(tiempo)
        
        cy.get('#TABLE_CONTAINER_CAANROCAJA > .form-group > .gx-label').should('be.visible', { timeout: 10000 }).contains('Identificación Caja')
        cy.wait(tiempo)
        
        cy.xpath("//span[contains(@id,'TEXTBLOCK_VAR_CJDFECHAAPERTURA')]").should('be.visible', { timeout: 10000 }).contains('Fecha Apertura')
        cy.wait(tiempo)
        
        cy.xpath("//span[contains(@id,'ATTRIBUTES1')]").should('be.visible', { timeout: 10000 }).contains('Datos Pagos')
        cy.wait(tiempo)
        cy.xpath("//label[contains(.,'Código de Barra')]").should('be.visible', { timeout: 10000 }).contains('Código de Barra')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'CDPBOANROREGISTRO')]").should('be.visible', { timeout: 10000 }).contains('Nro. Comprobante')
        cy.wait(tiempo)
        cy.xpath("//span[contains(.,'Boleto')]").should('be.visible').contains('Boleto')
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Importe')])[1]").should('be.visible', { timeout: 10000 }).contains('Importe')
        cy.wait(tiempo)
        cy.xpath("//label[contains(.,'Total a Pagar')]").should('be.visible', { timeout: 10000 }).contains('Total a Pagar')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vSALDOMP']").should('be.visible', { timeout: 10000 }).contains('Saldo')
        cy.wait(tiempo)

        cy.xpath("//span[contains(.,'Medios de Pago')]").should('be.visible', { timeout: 10000 }).contains('Medios de Pago');
        cy.wait(tiempo)
        cy.xpath("(//span[contains(.,'Medio de Pago')])[1]").should('be.visible', { timeout: 10000 }).contains('Medio de Pago')
        cy.wait(tiempo)
        cy.xpath("//label[@for='vMNDID']").should('be.visible', { timeout: 10000 }).contains('Moneda')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'MTOREDONDEO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Redondeo')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'MTOCONTADO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Monto')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'MTOVUELTO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Vuelto')
        cy.wait(tiempo)
        cy.xpath("//span[contains(@id,'TOTALCDO_VAR_LEFTTEXT')]").should('be.visible', { timeout: 10000 }).contains('Total')
        cy.wait(tiempo)
        
        cy.get('#BUTTON6').should('be.visible', { timeout: 10000 })
        cy.wait(tiempo) 
        
        cy.xpath("(//span[contains(.,'Medio de Pago')])[3]").should('be.visible', { timeout: 10000 }).contains('Medio de Pago')
        cy.wait(tiempo)
        cy.xpath("//span[contains(.,'Importe Asignado')]").should('be.visible', { timeout: 10000 }).contains('Importe Asignado')
        cy.wait(tiempo)

        cy.get('#BTNGRABARPAGO').should('be.visible', { timeout: 10000 })
        cy.wait(tiempo) 
        cy.get('#BUTTON7').should('be.visible', { timeout: 10000 })
        cy.wait(tiempo) 
        //});

      }

      // Nuevo método para llenar el código de barras
    llenarCodigoDeBarras(codigo,t) {
      let tiempo = t;
      cy.get('#vCDPCODIGOBARRA').type(codigo);
      cy.wait(tiempo);
      cy.xpath("//input[contains(@id,'CODBARRA')]").should('be.visible', { timeout: 10000 }).click({force: true});
      cy.wait(tiempo);
      
      cy.xpath("//input[contains(@id,'CODBARRA')]").should('be.visible', { timeout: 10000 }).click({force: true})
      cy.wait(tiempo)

    }

    SeccionTres(medioPago,moneda,t) {
      let tiempo = t;
      cy.xpath("//select[contains(@id,'vMPGID')]").select(medioPago, { force: true})
      cy.wait(tiempo)
      cy.xpath("//select[contains(@id,'vMNDID')]").select(moneda, { force: true})
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'BUTTON6')]").should('be.visible', { timeout: 10000 }).click({force: true})
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'BTNGRABARPAGO')]").should('be.visible', { timeout: 10000 }).click({force: true})
      cy.wait(tiempo)

      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Desea confirmar el pago?');
        return true; // Esto simula hacer clic en "Aceptar"
        


    });

    cy.wait(tiempo)
    cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
      cy.wrap($iframe)
      .xpath("//span[contains(@id,'TEXTBLOCK')]").should('be.visible', { timeout: 10000 })
      .contains('&caaimprimeticket: N')
      .xpath("//input[contains(@id,'BUTTON1')]").should('be.visible', { timeout: 10000 }).click({force: true});
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

        cy.xpath("//a[contains(.,'DS')]").should('be.visible', { timeout: 10000 }).click({force: true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible', { timeout: 10000 }).click({force: true})
        

      }
      
        
    }//final

export default ProyectoOcho_Po