const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.betika.com/en-ke/login'
  }
})
