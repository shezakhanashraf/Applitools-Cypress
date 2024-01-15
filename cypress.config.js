const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://testops.katalon.io/login',
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 200000
  },
});


require('@applitools/eyes-cypress')(module);
