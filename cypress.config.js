const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4mfmes",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/user",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
