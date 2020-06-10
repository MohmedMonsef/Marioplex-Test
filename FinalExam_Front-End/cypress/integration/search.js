/// <reference types="Cypress" />

describe("Test Search", () => {
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

  it("TopResult of an artist search | Follow,UN-Follow him", () => {
    var searching_substring = "artist";

    cy.visit("http://100.25.194.8/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click();

    cy.contains(" WebPlayer ").click();

    cy.get('[testid="searchpage link"]').click();
    cy.get("input")
      .focus({ force: true })
      .type(searching_substring + "\n");
    cy.get('[id="top-card"]').click();

    cy.get('[id="followartistbutton"]').click();
    cy.get('[id="unfollowartistbutton"]').click({ force: true, timeout: 1000 });
  });
});
