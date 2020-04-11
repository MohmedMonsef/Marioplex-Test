/// <reference types="Cypress" />

describe("Login_Signup_ForgetPassword", () => {
  //make sure email is unique to make signup correctly
  it("Signup", () => {
    cy.visit("/");
    cy.get("a")
      .contains("SignUp")
      .click();
    cy.signup(1);
  });
  it("Login", () => {
    cy.visit("/");
    cy.get('[testid="login link"]')
      .find("a")
      .click();
    cy.login(1);
  });
  it("ForgetPassword", () => {
    cy.visit("/");
    cy.get('[testid="login link"]')
      .find("a")
      .click();
    cy.contains("Forget your password?").click();
    cy.fixture("Test").then(Data => {
      cy.get('[testid="email input"]').type(Data[1].Email);
    });
    cy.get('[testid="forget password button"]').click();
    cy.contains("A message has been sent").then(message => {
      expect(message).to.be.exist;
    });
  });
});
