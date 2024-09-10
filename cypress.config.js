const { defineConfig } = require("cypress");

const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  video:true,
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require('./webpack.config'),
        watchOptions: {},
       
      };

      on('file:preprocessor', webpack(options));
      return config;
    },
    baseUrl: 'http://localhost:5173/',
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/integration/cucumber-tests/**/*.feature',
  },
});