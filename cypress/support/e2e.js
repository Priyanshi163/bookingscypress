// cypress/support/e2e.js
import './commands'

// cypress/support/e2e.js

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false;
});
