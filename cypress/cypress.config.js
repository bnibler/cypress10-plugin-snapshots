const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    supportFile: false,
    excludeSpecPattern: [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],
    setupNodeEvents(on, config) {
      const port = process.env.CYPRESS_TESTSERVER_PORT;
      if (port) {
        config.baseUrl = config.baseUrl.replace(':8080', `:${port}`)
      }
      return config;
    }
  },
  env: {
    cypress_plugin_snapshots: {
      "serverPort": 2222,
      "diffLines": 4,
      "excludeFields": ["ignore"]
    }
  }
});
//
//
// const {
//   initPlugin
// } = require('cypress-plugin-snapshots/plugin');
//
// module.exports = (on, config) => {
//   initPlugin(on, config);
//
//   const port = process.env.CYPRESS_TESTSERVER_PORT;
//   if (port) {
//     config.baseUrl = config.baseUrl.replace(':8080', `:${port}`)
//   }
//
//   return config;
// }
