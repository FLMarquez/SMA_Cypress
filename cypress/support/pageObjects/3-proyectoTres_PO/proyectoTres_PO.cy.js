import 'cypress-iframe'
class ProyectoTres_Po{

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
    
      SeccionDos(cuit, Telefono, email, t) {
        let tiempo = t;
        
       
        cy.get('#MENUTOGGLE_MPAGE').should("be.visible").click({ force: true });
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Personas').click({ force: true });          
        cy.get('span.sidebar-nav-item').should("be.visible").contains('Administración de Personas').click({ force: true });          
        cy.get('#PGMDESCRIPTORTEXTBLOCK').should('be.visible').contains('Administración de Personas')
        cy.get('#vK2BTOOLSGENERICSEARCHFIELD').should("be.visible",{timeout:5000}).type(cuit);
        cy.get('#vUPDATE_0001').should('exist',{timeout:1000}).click({ force: true })         
        
        cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
        cy.wrap($iframe)
        .xpath("//a[@href='#'][contains(.,'Ver más')]").should('be.visible').click({ force: true })
        
                
        cy.wrap($iframe)
        .xpath("//input[contains(@id,'PSNCARACTER04')]").should('be.visible').clear()
        .xpath("//input[contains(@id,'PSNCARACTER04')]").should('be.visible').type(Telefono);
             
        cy.wrap($iframe)
        .xpath("//input[contains(@id,'PSNCARACTER03')]").should('be.visible').clear()
        .xpath("//input[contains(@id,'PSNCARACTER03')]").should('be.visible').type(email);
          
        cy.wrap($iframe)
        .xpath("//input[contains(@id,'ENTER')]").should('be.visible').click({ force: true });

        cy.wrap($iframe)
        .get('#toast-container').find('.toast-success').should('contain', 'La persona física MARQUEZ fue actualizada');
        
        


        // Navegación por el menú
        //cy.xpath("//input[contains(@id,'MENUTOGGLE_MPAGE')]").should("be.visible",{timeout:5000}).click({ force: true });
        //cy.xpath("(//span[contains(.,'Personas')])[1]").should("be.visible",{timeout:5000}).click({ force: true });
        //cy.xpath("//span[@class='sidebar-nav-item'][contains(.,'Administración de Personas')]").should("be.visible",{timeout:5000}).click({ force: true });
        
        // Esperar a que cargue la nueva página
        //cy.wait(tiempo);

        // Búsqueda de una persona
        //cy.xpath("//input[contains(@id,'vK2BTOOLSGENERICSEARCHFIELD')]").should("be.visible",{timeout:5000}).type(cuit);
        //cy.wait(tiempo);
        //cy.xpath("//img[contains(@id,'vUPDATE_0001')]").should('exist').click({ force: true })

        //cy.wait(tiempo);

         // Cambiar a iframe
         //cy.iframe('#gxp0_ifrm').should('exist').then($iframe => {
         //cy.wrap($iframe)
         //.xpath("//a[@href='#'][contains(.,'Ver más')]").should('be.visible').click({ force: true })
        //cy.wait(tiempo)       
 
         // Interacción en el iframe

         //cy.wrap($iframe)
         //.xpath("//input[contains(@id,'PSNCARACTER04')]").should('be.visible').clear();
        //cy.wait(tiempo) 

         //cy.wrap($iframe)
         //.xpath("//input[contains(@id,'PSNCARACTER04')]").should('be.visible').type(Telefono);
        //cy.wait(tiempo) 
        

        //cy.wrap($iframe)
        //.xpath("//input[contains(@id,'PSNCARACTER03')]").should('be.visible').clear();
      // cy.wait(tiempo) 

        //cy.wrap($iframe)
        //.xpath("//input[contains(@id,'PSNCARACTER03')]").should('be.visible').type(email);
      // cy.wait(tiempo) 



        //cy.wrap($iframe)
        // .xpath("//input[contains(@id,'ENTER')]").should('be.visible').click({ force: true });
        //cy.wait(tiempo) 
        
 
        // Verificar el mensaje de éxito

        //cy.wrap($iframe)
        // .get('#toast-container').find('.toast-success').should('contain', 'La persona física MARQUEZ fue actualizada');
        //cy.wait(tiempo)
       
            });
    
                
        cy.get('#USERINITIALSTEXTBLOCKSMALL_MPAGE').should('be.visible').click({force: true})
        cy.get('#SIGNOUT_MPAGE').should('be.visible').click({force: true})
         //cy.xpath("//a[@href='#'][contains(.,'AU')]").should('be.visible').click({force: true})
         //cy.wait(tiempo)
         //cy.xpath("//a[@href='#'][contains(.,'Salir')]").should('be.visible').click({force: true})

          }
      
        
    }//final

export default ProyectoTres_Po