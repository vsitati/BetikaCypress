const { defineConfig } = require("cypress");

module.exports = defineConfig ({
  e2e: {
    setupNodeEvents(on, config) {
    baseUrl:'https://www.betika.com/en-ke/login',
    reporter;'mochawesome',
    reporterOptions; {
      reportDir: 'cypress/results',
      overwrite; false,
      html; true,
      json; false
      reportFilename: '[status]_[datetime]-[name]-report',
      timestamp; 'longDate'
    }
    }
  }
})
