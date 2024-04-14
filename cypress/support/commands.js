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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { expect } from "chai";

// Visit homepage
Cypress.Commands.add("visitHomepage", () => {
  cy.visit("/");
  cy.wait(1000);
});

// // Logs In Valid
Cypress.Commands.add("logsIn", () => {
  cy.get("#loginModal").should("be.visible");
  cy.get("#loginForm").within(() => {
    cy.get("#loginEmail").type("testaccount4567@stud.noroff.no");
    cy.get("#loginPassword").type("Testaccount4567");

    cy.get("button[type=submit]").click();
  });

  cy.wait(2000);
});

// Not valid login
Cypress.Commands.add("notValidLogin", () => {
  cy.get("#loginModal").should("be.visible");
  cy.get("#loginForm").within(() => {
    cy.get("#loginEmail").invoke("val", Cypress.env("INVALID_EMAIL"));
    cy.get("#loginPassword").invoke("val", Cypress.env("INVALID_PASSWORD"));
    cy.get("button[type=submit]").click();
    cy.wait(1000);
  });

  cy.on("window:alert", (text) => {
    cy.wrap(text).should(
      "contain",
      "Either your username was not found or your password is incorrect",
    );
  });
});

// Is logged in
Cypress.Commands.add("loggedIn", () => {
  cy.window().then((win) => {
    const token = win.localStorage.getItem("token");
    cy.wrap(token).should("not.be.null");
    cy.wrap(token).should("be.a", "string").and("not.be.empty");
  });

  cy.get('[data-cy="profileName"]').should("contain", "testaccount");
});
