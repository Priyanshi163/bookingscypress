const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://miniature-fortnight-pj67v6w-pj67v6w4px4xfr5p6.github.dev',
    setupNodeEvents(on, config) {
      // optional: node event listeners
    },
  },
});
