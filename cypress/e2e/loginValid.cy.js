// Login function with valid credentials
describe("Login Function Valid", () => {
  it("lets user log in with valid credentials", () => {
    cy.visitHomepage();

    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.logsIn();
  });
});

// Log out btn
//cy.get("button.btn-outline-warning").contains("Logout").should("exist");

// cy.get('.modal-content .modal-footer button[data-auth="login"]').click();
//         cy.get("#loginPassword").invoke("val", "example123");
//         cy.wait(1000);

//         cy.get("#loginForm button").contains("Login").click();
//         cy.wait(1000);
