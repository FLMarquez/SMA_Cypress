class ProyectoUno_Po{

    visitHome(){
        let tiempo = 1000;
        beforeEach(() => {
            cy.visit('https://test.elinpar.com/saemsma/com.ktksuitelr.k2bfsg.login');
            //cy.title().should('eq', 'titulo');
            cy.wait(tiempo);
        });

    }

    SeccionUno(usuario,contrasena,t){
        let tiempo=t
       //ESCRIBIR EL USUARIO Y CONTRASEÑA EN EL ACCESO A USUARIOS 
       //solo se intentará escribir en los campos #Usuario y #Contraseña si email y password no son cadenas vacías      
       if (usuario !== "") {
        cy.xpath("//input[contains(@id,'vUSERNAME')]").should("be.visible",{timeout:5000}).type(usuario);
        }
        if (contrasena !== "") {
        cy.xpath("//input[contains(@id,'vUSERPASSWORD')]").should("be.visible",{timeout:5000}).type(contrasena);
        }
        cy.wait(tiempo);
        //HACER CLIC EN EL BOTÓN INICIAR SESIÓN
        cy.xpath("//input[contains(@id,'LOGIN')]").should("be.visible",{timeout:5000}).click() 
        cy.wait(tiempo)    

    }

   
    
}//final

export default ProyectoUno_Po