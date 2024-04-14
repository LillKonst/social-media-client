// Login function without valid credentials
describe("Login Function Not Valid", () => {
  it("alerts if login attempt failed", () => {
    cy.visitHomepage();

    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.notValidLogin();
  });
});
