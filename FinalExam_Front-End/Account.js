/// <reference types="Cypress" />

describe("Testing Account", () => {
  Cypress.Cookies.defaults({
    whitelist: "password",
    whitelist: "email",
  });

  let email = "abdelrhmanfdl99@gmail.com";
  let anotherEmail = "something@gmail.com";
  let password = "123456789";
  let invalidEmail = "1@g";

  beforeEach(function () {
    cy.setCookie("email", email);
    cy.setCookie("password", password);
    Cypress.Cookies.preserveOnce("email", "password");
  });
  it("Edit profile", () => {
    let email = "abdelrhmanfdl99@gmail.com";
    let anotherEmail = "something@gmail.com";
    let password = "123456789";
    let invalidEmail = "1@g";

    cy.visit("http://100.25.194.8/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click({ timeout: 10000 });
    cy.get('[id="menu-icon"]').click({ timeout: 10000 });
    cy.get('[href="/UserAccount/Account-overview"]').click();
    cy.reload();

    cy.get('[testid="edit_profile_link"]').click();
    cy.get('[type="text"]').type(anotherEmail);
    cy.get('[type="password"]').type(password);
    cy.get("select").eq(0).select("m");
    cy.get("select").eq(1).select("01");
    cy.get("select").eq(2).select("01");
    cy.get("select").eq(3).select("1970");
    cy.get("select").eq(4).select("UK");
    cy.contains("SAVE PROFILE").click({ force: true, timeout: 10000 });
  });

  it("Try to change to invalid Email", () => {
    let email = "abdelrhmanfdl99@gmail.com";
    let anotherEmail = "something@gmail.com";
    let password = "123456789";
    let invalidEmail = "1@g";

    cy.visit("http://100.25.194.8/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click({ timeout: 10000 });
    cy.get('[id="menu-icon"]').click();
    cy.get('[href="/UserAccount/Account-overview"]').click();
    cy.reload();

    cy.get('[testid="edit_profile_link"]').click();
    cy.get('[type="text"]').type(invalidEmail);
    cy.get('[type="password"]').type(password);
    cy.get("select").eq(0).select("m");
    cy.get("select").eq(1).select("01");
    cy.get("select").eq(2).select("01");
    cy.get("select").eq(3).select("1970");
    cy.get("select").eq(4).select("UK");
    cy.contains("SAVE PROFILE")
      .click({ force: true })
      .then(() => {
        cy.get("body").should("contain", " Sorry, wrong password ", {
          timeout: 10000,
        });
      });
  });

  it("Change password", () => {
    let email = "abdelrhmanfdl99@gmail.com";
    let anotherEmail = "something@gmail.com";
    let password = "123456789";
    let invalidEmail = "1@g";

    cy.visit("http://100.25.194.8/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type("abdelrhmanfdl99@gmail.com");
    cy.get('[testid="password input"]').type("123456789");
    cy.get('[testid="log in button"]').click();
    cy.get('[id="menu-icon"]').click({ timeout: 10000 });
    cy.get('[href="/UserAccount/Account-overview"]').click();
    cy.reload();
    cy.get('[testid="change_password_link"]').click();
    cy.get('[type="password"]').eq(0).type(password);
    cy.get('[type="password"]').eq(1).type("987654321");
    cy.get('[type="password"]').eq(2).type("987654321");
    cy.contains("SET NEW PASSWORD").click();
  });
});
