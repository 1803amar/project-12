const { defineConfig } = require("cypress");


async function setupNodeEvents(on, config) {
  // implement node event listeners here
  //  this is requred for the processor to be generate json , were my files 
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      // implement node event listeners here
      specPattern:'cypress/Integration/example/*.js'
    
  },
});

