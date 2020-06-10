/// <reference types="Cypress" />

describe("Artist Page", () => {
  Cypress.Cookies.defaults({
    whitelist: "password",
    whitelist: "email",
  });

  var email = "bahaaeldeen1999@gmail.com";
  var password = "12345678";

  beforeEach(function () {
    cy.setCookie("email", email);
    cy.setCookie("password", password);
    Cypress.Cookies.preserveOnce("email", "password");
  });

  it("Create an album", () => {
    var artistName = "artist6";
    var newAlbumName = "createdByCypress3";

    cy.visit("http://100.25.194.8/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click();

    cy.contains(" ArtistPage ").click({ timeout: 10000 });
    cy.contains(" Create Album ").click({ timeout: 10000 });

    cy.get('[name="file"]').eq(0).focus({ force: true }).type(newAlbumName);
    cy.get('[name="file"]').eq(1).focus({ force: true }).type("some-label");
    cy.get('[name="file"]').eq(2).focus({ force: true }).type("great type");
    cy.get('[name="file"]').eq(3).focus({ force: true }).type("2020");
    cy.get("select").focus({ force: true }).select("eg", { force: true });
    cy.get('[name="file"]').eq(4).focus({ force: true }).type("something");

    cy.get('[testid="confirm_create"]').click();

    // Check that album is created
    cy.visit("http://100.25.194.8/");
    cy.contains(" WebPlayer ").click();

    cy.get('[testid="searchpage link"]').click();
    cy.get("input")
      .focus({ force: true })
      .type("artist6" + "\n");
    cy.get('[id="top-card"]').click({ timeout: 10000 });
    cy.get("body").should("contain", newAlbumName);
  });
});
