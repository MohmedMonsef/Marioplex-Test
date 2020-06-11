/// <reference types="Cypress" />

describe("Testing PlayList", () => {
  Cypress.Cookies.defaults({
    whitelist: "password",
    whitelist: "email"
  });

  var email = "abdelrhmanfdl99@gmail.com";
  var password = "123456789";
  var invalidEmail = "@@gmail.com";

  beforeEach(function() {
    cy.setCookie("email", email);
    cy.setCookie("password", password);
    Cypress.Cookies.preserveOnce("email", "password");
  });

  it("CreatePlaylist|Rename playlist|Delete playlist", () => {
    cy.visit("http://54.197.150.175/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click();

    cy.contains(" WebPlayer ").click();

    // Create a new playlist
    cy.contains("Create Playlist").click();
    cy.get('[placeholder="New Playlist"]').type("new");
    cy.contains(" create ").click();

    // Rename the playlist
    cy.get('[class="smallbar"]')
      .find('[testid="userplaylists"]')
      .eq(0)
      .rightclick({ force: true });
    cy.get('[id="renameInput"]').click({ force: true });
    cy.get('[id="in_rename"]').type("newRenamed\n", { force: true });

    // Delete the playlist
    cy.get('[class="smallbar"]')
      .find('[testid="userplaylists"]')
      .eq(0)
      .rightclick({ force: true });
    cy.get('[class="delete_div"]').click({ force: true });
    cy.get('[testid="confirm_create"]').click({ force: true });
  });

  it("Play a song | Like a song | Dis-Like song", () => {
    var nthCreatedPlayList = 0,
      nthSongToDealWith = 0;

    cy.visit("http://54.197.150.175/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click();

    cy.contains(" WebPlayer ").click();

    cy.get('[testid="popularplaylist card"]', { timeout: 15000 })
      .first()
      .click();

    // Play a song
    cy.get('[testid="songcomponent"]')
      .eq(0)
      .dblclick();

    // Like a song
    cy.get('[id="icondiv"]')
      .eq(nthSongToDealWith)
      .click({ timeout: 10000 });
    cy.get('[id="ifnotliked"]').click({ timeout: 10000 });

    // Dis-Like the song
    cy.get('[id="icondiv"]')
      .eq(nthSongToDealWith)
      .click({ timeout: 10000 });
    cy.get('[id="ifliked"]').click({ timeout: 10000 });

    // Add song to playlist
    cy.get('[id="icondiv"]')
      .eq(nthSongToDealWith)
      .click({ timeout: 10000 });
    cy.contains("Add to Playlist").click({ timeout: 10000 });
    cy.get('[testid="playlist card"]')
      .eq(nthCreatedPlayList)
      .click();

    cy.get('[testid="userplaylists"]')
      .eq(nthCreatedPlayList)
      .click({ force: true });
  });

  it("Add song to play list", () => {
    var nthCreatedPlayList = 0,
      nthSongToDealWith = 0;

    cy.visit("http://54.197.150.175/");
    cy.get('[id="menu-icon"]').click();
    cy.get('[testid="login link"]').click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[testid="password input"]').type(password);
    cy.get('[testid="log in button"]').click();

    cy.contains(" WebPlayer ").click({ timeout: 10000 });
    cy.get('[id="icondiv"]')
      .eq(nthSongToDealWith)
      .click({ timeout: 10000 });
    cy.contains("Add to Playlist").click({ timeout: 10000 });
    cy.get('[testid="playlist card"]')
      .eq(nthCreatedPlayList)
      .click();

    cy.get('[testid="userplaylists"]')
      .eq(nthCreatedPlayList)
      .click({ force: true });
  });
});
