/// <reference types="Cypress" />

describe("Profile Page", () => {
  it("Account setting page doesn't exist", () => {
    cy.viewport("macbook-13");
    cy.visit("http://54.197.150.175/");
    cy.wait(1000);
    cy.contains("Log In").click();
    cy.login(2);

    cy.contains("Profile").click();
    cy.contains("Account").click();
    cy.wait(1000);
  });
});
