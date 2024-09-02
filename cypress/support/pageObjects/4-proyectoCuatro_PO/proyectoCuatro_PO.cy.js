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

  SeccionUno(usuario,contrasena,t){
    let tiempo=t
   //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS 
   //solo se intentará escribir en los campos #Usuario y #Contraseña si email y password no son cadenas vacías      
   if (usuario !== "") {
    cy.get('#vUSERNAME').should("be.visible").type(usuario);
    }
    if (contrasena !== "") {
    cy.get('#vUSERPASSWORD').should("be.visible").type(contrasena);
    }
    
    //HACER CLIC EN EL BOTÓN INICIAR SESIÓN
    cy.get('#LOGIN').should("be.visible").click() 
       

}

  SeccionDos(numeroActa, t) {
    let tiempo = t;
    
    cy.get('#MENUTOGGLE_MPAGE').should("be.visible").click({ force: true });
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Emisión Deuda').click({ force: true });          
    cy.get('span.sidebar-nav-item').should("be.visible").contains('Atención Primaria').click({ force: true });          
    cy.get('#vFILTROGENERAL').should("be.visible").type(numeroActa);
    cy.get('#BUSCAR').should("be.visible").click({ force: true });
    cy.get('a.ui.right.floated.large.blue.label').should("be.visible").contains('Consultar').click({force: true});
    cy.get('a#Tab_TABS_TABSCONTROLContainerpanel1').should("be.visible").contains('TASAS/SERVICIOS/OBJETOS').click({ force: true });
    cy.get('#ACTUALIZAROBLIGACIONES').should("be.visible").click({ force: true });
    cy.get('#vMULTIROWITEMSELECTED_GRIDOBLIGACIONES_0001').invoke('show').click({ force: true });
    cy.get('#IMPRIMIRCONTADO').should("be.visible").click({ force: true }); 
    

                 
    //cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should('be.visible', { timeout: 10000 }).click({ force: true });;
    //cy.wait(tiempo);
    //cy.xpath("//span[contains(.,'Emisión Deuda')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    //cy.wait(tiempo);
    //cy.xpath("//span[contains(.,'Atención Primaria')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    //cy.wait(tiempo);
    //cy.get('#vFILTROGENERAL').should("be.visible", { timeout: 5000 }).type(numeroActa);
    //cy.wait(tiempo);
    //cy.xpath("//input[contains(@id,'BUSCAR')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    //cy.wait(tiempo);
    //cy.xpath("//a[@class='ui right floated large blue label'][contains(.,'Consultar')]").invoke('show').click({force: true});
    //cy.wait(tiempo);
    //cy.xpath("//a[contains(@id,'TABSCONTROLContainerpanel1')][@href='#Tab_TabControl'][contains(.,'TASAS/SERVICIOS/OBJETOS')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    //cy.wait(tiempo);
    //cy.xpath("//input[contains(@name,'ACTUALIZAROBLIGACIONES')]").should("be.visible", { timeout: 5000 }).click({ force: true });
    //cy.wait(tiempo);
    //cy.xpath("(//label[contains(@for,'GRIDOBLIGACIONES')])[1]").should("be.visible", { timeout: 5000 }).click({ force: true });
    //cy.wait(tiempo);

    //cy.xpath("//input[@id='IMPRIMIRCONTADO']").should("be.visible", { timeout: 5000 }).click({ force: true });      
    

    //cy.wait(tiempo);

    cy.get('#USERINITIALSTEXTBLOCKSMALL_MPAGE').should('be.visible').click({force: true})
    cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

   //cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible', { timeout: 10000 }).click({force: true})
   //cy.wait(tiempo)
   //cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible', { timeout: 10000 }).click({force: true})
   //cy.wait(tiempo)
    
    
  }
}//final

export default ProyectoCuatro_Po;






  
