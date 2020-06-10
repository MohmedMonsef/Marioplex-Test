/// <reference types="Cypress" />

describe("Testing SignUn", () => {
  Cypress.Cookies.defaults({
    whitelist: "password",
    whitelist: "email",
  });

  var email = "abdelrhmanfdl99@gmail.com";
  var password = "123456789";

  beforeEach(function () {
    cy.setCookie("email", email);
    cy.setCookie("password", password);
    Cypress.Cookies.preserveOnce("email", "password");
  });

  it("logIn-testing", () => {
    cy.visit("http://100.25.194.8/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type("123456789");
    cy.get('[testid="log in button"]').click();
  });
});
