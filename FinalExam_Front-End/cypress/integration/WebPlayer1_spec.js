/// <reference types="Cypress" />

describe("WebPlayer side bar", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("http://54.197.150.175/");
    cy.wait(1000);
    cy.contains("Log In").click();
    cy.login(2);
    cy.contains("WebPlayer").click();
    cy.wait(1000);
  });
  it("Creating 20 Playlist, then can't click on the 20th playlist", () => {
    for (let i = 1; i <= 20; i++) {
      cy.get('[testid="create button"]').click();
      cy.get('[placeholder="New Playlist"]').type("my playlist " + String(i));
      cy.get('[testid="confirm_create"]').click();
    }
    cy.contains("my playlist 20").click();
  });
  it("can not changing mind not to rename playlist, the text box still appearing", () => {
    cy.contains("my playlist 1").rightclick({ force: true });
    cy.wait(1000);
    cy.contains("Rename").click({ force: true });
    cy.wait(1000);
    cy.contains("Home").click();
    cy.wait(1000);
    cy.get("#in_rename").should("not.exist");
  });
});
