const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

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
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--disable-software-rasterizer');
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--headless'); // Asegúrate de estar en modo headless

          launchOptions.preferences = {
            default: {
              'download': {
                prompt_for_download: false,
                default_directory: config.env.downloadDirectory,
                directory_upgrade: true
              },
              'plugins': {
                always_open_pdf_externally: true,
                plugins_disabled: ['Chrome PDF Viewer']
              }
            }
          };
        } else if (browser.name === 'firefox') {
          launchOptions.preferences = {
            'browser.download.folderList': 2,
            'browser.download.dir': config.env.downloadDirectory,
            'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
            'pdfjs.disabled': true
          };
        } else if (browser.name === 'electron') {
          // Electron config: Make sure Electron is configured correctly for downloads
          // Electron may not need additional arguments for downloads, just ensure the directory is set correctly
          launchOptions.preferences = {
            default: {
              'download': {
                prompt_for_download: false,
                default_directory: config.env.downloadDirectory,
                directory_upgrade: true
              }
            }
          };
          // No es necesario agregar argumentos como en Chrome y Firefox
        }
        return launchOptions;
      });

      // Asegúrate de que la carpeta de descargas existe
      on('before:run', () => {
        const downloadDirectory = path.resolve(config.env.downloadDirectory);
        if (!fs.existsSync(downloadDirectory)) {
          fs.mkdirSync(downloadDirectory, { recursive: true });
        }
      });

      return config;
    },
    baseUrl: 'https://test.elinpar.com',
    env: {
      downloadDirectory: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\SMA_Cypress\\downloads',
    }
  }
});










