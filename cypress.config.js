const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');


module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1500,
  viewportHeight: 864,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 19000,
  videoCompression: false,
  trashAssetsBeforeRuns: false,
  projectId: "z9sb28",
  e2e: {
    setupNodeEvents(on, config) {
      // Registrar las tareas
      on('task', {
        downloadFile,
        parsePdf({ filePath }) {
          const dataBuffer = fs.readFileSync(filePath);
          return pdfParse(dataBuffer).then(data => {
            return data.text;
          });
        }
      });

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.preferences.default['download'] = {
            prompt_for_download: false, // Evitar el diálogo de descarga
            default_directory: config.env.downloadDirectory, // Directorio de descarga
            directory_upgrade: true // Asegurar que la carpeta existe
          };
          launchOptions.preferences.default['plugins'] = {
            always_open_pdf_externally: true, // Abrir siempre los PDFs externamente
            plugins_disabled: ['Chrome PDF Viewer'] // Deshabilitar el visor de PDF de Chrome
          };
        } else if (browser.name === 'firefox') {
          launchOptions.preferences['browser.download.folderList'] = 2; // Usar una carpeta específica
          launchOptions.preferences['browser.download.dir'] = config.env.downloadDirectory; // Carpeta de descarga
          launchOptions.preferences['browser.helperApps.neverAsk.saveToDisk'] = 'application/pdf'; // Descargar automáticamente PDFs
          launchOptions.preferences['pdfjs.disabled'] = true; // Desactivar el visor de PDF integrado de Firefox
        }
        return launchOptions;
      });
      

      return config; // Asegúrate de devolver la configuración
    },
    baseUrl: 'https://test.elinpar.com',
    env: {
      downloadDirectory: 'C:\Users\Lmarquez\Desktop\Escritorio PC Lucas\Cypress_SMA\cypress\downloads',
    }
  }
  
});







