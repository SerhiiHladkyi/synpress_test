const { defineConfig } = require('cypress')
const synpressPlugins = require('@synthetixio/synpress/plugins');

module.exports = defineConfig({
  userAgent: 'synpress',
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  video: true,
  chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 850,
  env: {
    coverage: false,
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/specs',
    supportFile: 'tests/support/index.js',
  },
  component: {
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config
    },
    specPattern: './**/*spec.{js,jsx,ts,tsx}',
  },
})
