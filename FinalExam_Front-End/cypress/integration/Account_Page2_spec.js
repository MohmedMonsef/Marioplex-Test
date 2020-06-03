/// <reference types="Cypress" />

describe("Account Page ", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("http://100.25.194.8/");
    cy.login(2);
  });
  it("Recover Playlist table view has problem", () => {
    cy.contains("Profile").click();
    cy.contains("Account").click();
    cy.contains("Recover playlists").click();
    cy.get(".footer").scrollIntoView();
  });
});
