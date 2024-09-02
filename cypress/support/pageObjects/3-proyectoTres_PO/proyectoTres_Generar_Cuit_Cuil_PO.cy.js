import 'cypress-iframe'
class ProyectoTres_Generar_Cuit_Cuil_Po{

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
        cy.get('#vUSERNAME').should("be.visible",{timeout:5000}).type(usuario);
        }
        if (contrasena !== "") {
        cy.get('#vUSERPASSWORD').should("be.visible",{timeout:5000}).type(contrasena);
        }
        cy.wait(tiempo);
        //HACER CLIC EN EL BOTÓN INICIAR SESIÓN
        cy.get('#LOGIN').should("be.visible",{timeout:5000}).click() 
        cy.wait(tiempo)    

    }
    
      SeccionDos(DNI, t) {
        let tiempo = t;
        
        cy.get('#MENUTOGGLE_MPAGE').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Personas').click({ force: true });
        cy.get('span.sidebar-nav-item').should('be.visible').contains('Generar Cuit/Cuil').should("be.visible").click({ force: true });
        cy.wait(tiempo);
        cy.get('#vPSNNUMERODOCUMENTO').should("be.visible").type(DNI);
        cy.get('#vPSNSEXO1').should('exist').click({ force: true })
        cy.get('#GENERAR').should('exist').click({ force: true })
        cy.get('#span_vPSNCUIP').should('contain', '20327855418');



        // Navegación por el menú
        //cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        //cy.xpath("(//span[contains(.,'Personas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        //cy.xpath("//span[contains(.,'Generar Cuit/Cuil')]").should("be.visible",{timeout:5000}).click({ force: true });
        
        // Esperar a que cargue la nueva página
        //cy.wait(tiempo);

        // Generar CUIT
        //cy.xpath("//input[@id='vPSNNUMERODOCUMENTO']").should("be.visible",{timeout:5000}).type(DNI);
       // cy.wait(tiempo);
        //cy.xpath("//label[@for='vPSNSEXO1'][contains(.,'Masculino')]").should('exist').click({ force: true })
       //cy.wait(tiempo);
       // cy.xpath("//input[contains(@id,'GENERAR')]").should('exist').click({ force: true })
       // cy.wait(tiempo);
       // cy.xpath("//span[contains(@id,'span_vPSNCUIP')]").should('contain', '20327855418');

        

       cy.get('#USERINITIALSTEXTBLOCKSMALL_MPAGE').should('be.visible').click({force: true})
       cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})

        //Cerrar Sesión
        // cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').click({force: true})
        // cy.wait(tiempo)
        // cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').click({force: true})

        

      }
    }//final

export default ProyectoTres_Generar_Cuit_Cuil_Po