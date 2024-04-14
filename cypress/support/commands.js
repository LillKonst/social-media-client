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

import { expect } from "chai";

// Visit homepage
Cypress.Commands.add("visitHomepage", () => {
  cy.visit("/");
  cy.wait(1000);
});

// Shows Log In Form
Cypress.Commands.add("showsLoginForm", () => {
  cy.get(".modal-footer").find('button [data-auth="login"]').click();
  cy.get("#loginModal").should("be.visible");
  cy.wait(1000);
});

// Logs In Valid
Cypress.Commands.add("logsIn", () => {
  cy.get("#loginModal").should("be.visible");
  cy.get("#loginForm").within(() => {
    cy.get("#loginEmail").invoke("val", "test@gmal.com");
    cy.get("#loginPassword").invoke("val", "test123");
    cy.get("button[type=submit]").click();
  });

  cy.wait(1000);
});

// Not valid login
Cypress.Commands.add("notValidLogin", () => {
  cy.get("#loginModal").should("be.visible");
  cy.get("#loginForm").within(() => {
    cy.get("#loginEmail").invoke("val", "notValid@example.com");
    cy.get("#loginPassword").invoke("val", "notValid");
    cy.get("button[type=submit]").click();
    cy.wait(1000);
  });

  cy.on("window:alert", (text) => {
    expect(text).to.contains(
      "Either your username was not found or your password is incorrect",
    );
  });
});

// Cypress.Commands.add("loggedIn", () => {
//     cy.window().should('have.property', 'localStorage').then((localStorage) => {
//         const token = localStorage.getItem("token");
//         expect(token).to.not.be.null;
//         expect(token).to.be.a("string");
//     });
// });
