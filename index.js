const cypress = require('cypress');

const specs = [
  'cypress/e2e/1-Login/1-Login_SMA_PO.cy.js',
  'cypress/e2e/2-Personas/1-Personas_Valida_Pantalla.cy.js',
  'cypress/e2e/2-Personas/2-Personas_Actualizacion_Datos.cy.js',
  'cypress/e2e/2-Personas/3-Personas_Generar Cuit_Cuil.cy.js',
  'cypress/e2e/2-Personas/4-Personas_Crear_Nuevo_Domicilio.cy.js',
  'cypress/e2e/2-Personas/4-Personas_Validar_Mail.cy.js',
  'cypress/e2e/3-Objetos/1-Objetos_Valida_Pantalla.cy.js',
  'cypress/e2e/4-Atencion_Primaria/1-Atencion_Primaria_SMA_PO.cy.js',
  'cypress/e2e/4-Atencion_Primaria/2-Lectura-PDF_PO.cy.js',
  'cypress/e2e/5-Caja/1-Caja_Apertura_Caja_PO.cy.js',
  'cypress/e2e/5-Caja/1-Caja_Cierre_Caja_PO.cy.js'

];

cypress.run({
  spec: specs.join(','),
  headless: true, // Ejecutar en modo headless
  browser: 'firefox' // Especifica el navegador, puedes cambiarlo si es necesario
}).then(results => {
  console.log('Pruebas completadas:', results);
}).catch(err => {
  console.error('Error ejecutando Cypress:', err);
});
