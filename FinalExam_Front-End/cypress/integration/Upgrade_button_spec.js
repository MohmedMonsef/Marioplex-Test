/// <reference types="Cypress" />

describe("WebPlayer", () => {
  it("upgrade button click far from it, opens newtab of premium", () => {
    cy.viewport("macbook-13");
    cy.visit("http://localhost:8080/");
    cy.wait(1000);
    cy.contains("Log In").click();
    cy.login(2);
    cy.contains("WebPlayer").click();
    cy.wait(1000);
    cy.get("#navBar").click(200, 30);
  });
});
