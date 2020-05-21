/// <reference types="Cypress" />

describe("SignUp_Login", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("http://localhost:8080/");
    cy.wait(1000);
  });

  it("SignUp", () => {
    cy.contains("Sign up").click();
    cy.wait(1000);
    cy.signup(1);
  });

  it("login", () => {
    cy.contains("Log In").click();
    cy.wait(1000);
    cy.login(2);
  });
});
