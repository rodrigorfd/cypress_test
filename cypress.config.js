const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://teste.com.br/login',
    chromeWebSecurity: false,
    video: true, 
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    env: {
      allure: true,
    },
  },
  browser: {
    userAgent: 'Chrome/51.0.2704.103 Safari/537.36'
  }
});
