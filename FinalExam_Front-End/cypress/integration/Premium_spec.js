/// <reference types="Cypress" />

describe("Premium page", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("http://localhost:8080/");
    cy.wait(1000);
    cy.contains("Log In").click();
    cy.login(2);
  });
  it("Credit-Card-Number Tesxt Field", () => {
    cy.contains("Premium").click();
    cy.get('[testid="log in link"]')
      .eq(0)
      .click();
    cy.get("#CreditNumber").type("7342 1039 1103 4211");
    cy.get('[testid="month of expiration input"]').select("May");
    cy.get('[testid="year of expiration input"]').select("26");
    cy.get("#SecurityCode").type("222");
    cy.get("#premium-btn").click();
    cy.wait(1000);
    cy.get("#errors").should("not.exist");
  });
});
