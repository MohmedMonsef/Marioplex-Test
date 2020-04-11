/// <reference types="Cypress" />

describe("WebPlayer_PlaylistPage", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.contains("Login").click();
    cy.login(4);
    cy.contains("WebPlayer").click();
    cy.wait(3000);
  });

  it("Play,like,volumebar", () => {
    cy.get(".row")
      .eq(0)
      .find("a")
      .eq(2)
      .click({ force: true });

    cy.get('[testid="songcomponent"]')
      .eq(3)
      .trigger("mouseover")
      .get('[testid="play button"]')
      .trigger("mouseover", { force: true })
      .click({ force: true });

    cy.get('[testid="controllers"]')
      .find('[testid="playicon"]')
      .should(obj => {
        expect(obj).to.be.exist;
      });

    cy.get('[testid="emptyhearticon"]')
      .eq(1)
      .should(obj => {
        expect(obj).to.be.exist;
      });

    cy.get('[testid="emptyhearticon"]')
      .eq(1)
      .click();
    cy.get('[testid="filledhearticon"]').should("exist");

    cy.get('[testid="volumeprogressbar"]')
      .invoke("width", "70")
      .trigger("change");

    cy.get('[testid="filledhearticon"]').click();
    cy.get('[testid="emptyhearticon"]')
      .eq(1)
      .should("not.exist");
  });

  it("play multiple music", () => {
    cy.get(".row")
      .eq(0)
      .find("a")
      .eq(4)
      .click({ force: true });

    cy.get('[testid="songcomponent"]')
      .eq(2)
      .trigger("mouseover")
      .get('[testid="play button"]')
      .trigger("mouseover", { force: true })
      .click({ force: true });
    cy.wait(2000);
    cy.get('[testid="songcomponent"]')
      .eq(3)
      .trigger("mouseover")
      .get('[testid="play button"]')
      .trigger("mouseover", { force: true })
      .click({ force: true });

    cy.get('[testid="song length"]')
      .eq(3)
      .invoke("text")
      .then(obj => {
        cy.get('[testid="endtime"]')
          .invoke("text")
          .should(obj2 => {
            expect(obj).to.eq(obj2);
          });
      });
  });

  it("three play/pause buttons", () => {
    cy.get(".row")
      .eq(0)
      .find("a")
      .eq(4)
      .click({ force: true });

    cy.get('[testid="playlistimage"]')
      .trigger("mouseover", { force: true })
      .get('[testid="imageplayicon"]')
      .click({ force: true })
      .then(() => {
        cy.get('[testid="playbutton"]').should("not.be.visible");
        cy.get('[testid="playicon"]').then(obj => {
          expect(obj).to.be.exist;
        });
      });
  });

  it("Adding to queue and remove,adding the playlist to liked playlists", () => {
    cy.get(".row")
      .eq(0)
      .find("a")
      .eq(2)
      .click({ force: true });

    cy.get(".playlist_info")
      .get('[testid="emptyheartbutton"]')
      .click();

    cy.get(".playlist_info")
      .get('[testid="filledheartbutton"]')
      .should("exist");

    cy.get(".playlist_info")
      .get('[testid="filledheartbutton"]')
      .click();

    cy.get(".playlist_info")
      .get('[testid="emptyheartbutton"]')
      .should("exist");

    for (let i = 0; i < 4; i++) {
      cy.get('[testid="songcomponent"]')
        .eq(i)
        .rightclick()
        .get("#mydropdown")
        .find("p")
        .eq(2)
        .click();
      cy.get('[testid="songcomponent"]')
        .eq(i)
        .rightclick()
        .get("#mydropdown")
        .find("p")
        .eq(1)
        .click();
    }
    cy.get('[testid="queueicon"]').click();
    cy.wait(3000);
    cy.get("#main_queue")
      .get('[testid="singComponent body"]')
      .should("have.length", "4");
  });

  it("liked songs page testing", () => {
    cy.get('[testid="likedsongs link"]').click();

    cy.get('[testid="songcomponent"]')
      .eq(3)
      .trigger("mouseover")
      .get('[testid="play button"]')
      .trigger("mouseover", { force: true })
      .click({ force: true });

    cy.get('[testid="controllers"]')
      .find('[testid="playicon"]')
      .should(obj => {
        expect(obj).to.be.exist;
      });
  });

  it("search page", () => {
    cy.get('[testid="searchpage link"]').click();
    cy.get('[testid="search-box"]')
      .type("classic")
      .type("{enter}");

    cy.get(".card-title").should("have.length.greaterThan", "0");
    cy.get(".card-title")
      .contains("classic")
      .should("exist");
  });

  it("creating playlist and related", () => {
    cy.get('[testid="create button"]').click();
    cy.get('[placeholder="New Playlist"]').type("anything");
    cy.get('[testid="confirm_create"]').click();

    cy.get('[testid="userplaylists"]')
      .eq(0)
      .should("have.text", "anything");

    cy.get('[testid="userplaylists"]')
      .eq(0)
      .rightclick()
      .then(() => {
        cy.get("#right-click-menu")
          .contains("Delete")
          .click();
      });
    cy.get('[testid="confirm_create"]').click();
    cy.get('[testid="userplaylists"]').should("have.length", "0");
  });
});
