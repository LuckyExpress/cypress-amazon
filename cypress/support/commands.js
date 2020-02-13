// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("PingAvailable", () => {
  cy.get("body").then($body => {
    // if($body.text().includes('現在在庫切れです。') || $body.text().includes('Currently unavailable.') || $body.text().includes('See All Buying Options')){
    if (!$body.text().includes("Buy now with 1-Click")) {
      cy.wait(15000);
      cy.reload();
      cy.PingAvailable();
    }
  });
});
