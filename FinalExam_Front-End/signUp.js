/// <reference types="Cypress" />

describe("Testing SignUn", () => {
  Cypress.Cookies.defaults({
    whitelist: "password",
    whitelist: "email",
  });

  var email = "abdelrhmanfdl99@gmail.com";
  var password = "123456789";
  var invalidEmail = "@@gmail.com";

  beforeEach(function () {
    cy.setCookie("email", email);
    cy.setCookie("password", password);
    Cypress.Cookies.preserveOnce("email", "password");
  });

  it("SignUp", () => {
    cy.visit(
      "http://100.25.194.8/?fbclid=IwAR2l6qb7TeWJyDrXKokdPWWn-O_lKXQ7VkHGsgzT9h_JFM-m_iz_HYujlhw"
    );
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="signup link"]').click();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Confirm email"]').type(email);
    cy.get('[type="password"]').type("123456789");
    cy.get('[placeholder="What should we call you?"]').type("human");
    cy.get('[testid="country input"]').select("Egypt");
    cy.get('[placeholder="Day"]').type("1");
    cy.get('[testid="month of birth input"]').select("April");
    cy.get('[placeholder="Year"]').type("1999");
    cy.get('[value="m"]').check();
    cy.contains("Sign Up").click();
  });
});
