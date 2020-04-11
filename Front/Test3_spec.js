/// <reference types="Cypress" />

describe("Testing Spotify", () => {
  Cypress.Cookies.defaults({
    whitelist: "password",
    whitelist: "email"
  });

  var email = "omoar@yahoo.com";
  var password = "123456789";

  beforeEach(function() {
    cy.setCookie("email", email);
    cy.setCookie("password", password);
    Cypress.Cookies.preserveOnce("email", "password");
  });

  it("SignUp", () => {
    cy.visit(
      "http://52.205.254.29/?fbclid=IwAR0OqTwZvS1x3yRnfaHX9EXFH4nv2YM-JBbjoqmNILwYlKECcKVZPHcJYIg"
    );
    cy.contains("SignUp").click();
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

  it("LogIn", () => {
    cy.visit(
      "http://52.205.254.29/?fbclid=IwAR0OqTwZvS1x3yRnfaHX9EXFH4nv2YM-JBbjoqmNILwYlKECcKVZPHcJYIg"
    );
    cy.contains("Login").click();
    cy.get('[testid="email input"]').type(email);
    cy.get('[type="password"]').type("123456789");
    cy.get('[id="login-btn"]').click();
  });

  it("[ForgetPassword Accepts invalid emails]", () => {
    cy.visit(
      "http://52.205.254.29/?fbclid=IwAR0OqTwZvS1x3yRnfaHX9EXFH4nv2YM-JBbjoqmNILwYlKECcKVZPHcJYIg"
    );
    cy.contains("Login").click();
    cy.contains(" Forget your password? ").click();
    cy.get('[testid="email input"]').type("abc");
    cy.get('[testid="forget password button"]').click();
  });

  it("Switch between accounts withOut logout (BUG)", () => {
    cy.visit(
      "http://52.205.254.29/?fbclid=IwAR0OqTwZvS1x3yRnfaHX9EXFH4nv2YM-JBbjoqmNILwYlKECcKVZPHcJYIg"
    );
    cy.contains("Login").click();
    cy.get('[testid="email input"]').type("asasas@asasas.com");
    cy.get('[type="password"]').type("123456789");
    cy.get('[id="login-btn"]').click();
    cy.visit("http://52.205.254.29/Login");
    cy.get('[testid="email input"]').type("zxzxzx@zxzxzx.com");
    cy.get('[type="password"]').type("123456789");
    cy.get('[id="login-btn"]').click();
    cy.visit(
      "http://52.205.254.29/?fbclid=IwAR0OqTwZvS1x3yRnfaHX9EXFH4nv2YM-JBbjoqmNILwYlKECcKVZPHcJYIg"
    );
    cy.contains(" WebPlayer ").click();
    cy.contains(" acc1 ").click(); //if throw an error --> BUG
  });

  it("Wide Buttons", () => {
    cy.visit(
      "http://52.205.254.29/?fbclid=IwAR0OqTwZvS1x3yRnfaHX9EXFH4nv2YM-JBbjoqmNILwYlKECcKVZPHcJYIg"
    );
    cy.contains("Login").click();
    cy.get('[testid="email input"]').type("asasas@asasas.com");
    cy.get('[type="password"]').type("123456789");
    cy.get('[id="login-btn"]').click();
    cy.contains(" WebPlayer "); // will be highlighted if you click on this step in cypress test
    cy.contains(" For Artist "); // will be highlighted if you click on this step in cypress test
    cy.contains(" ArtistPage "); // will be highlighted if you click on this step in cypress test
    cy.contains(" WebPlayer ").click();
    cy.get('[href="/GetPremium"]'); // will be highlighted if you click on this end step in cypress test
  });

  it("Click on PlayLists i created in Left Bar", () => {
    cy.visit("http://52.205.254.29/");
    cy.contains("Login").click();
    cy.get('[testid="email input"]').type("asasas@asasas.com");
    cy.get('[type="password"]').type("123456789");
    cy.get('[id="login-btn"]').click();
    cy.contains(" WebPlayer ").click();
    cy.get('[testid="create button"]').click();
    cy.get('[type="text"]').type("abc");
    cy.get('[testid="confirm_create"]').click();
    cy.get('[testid="userplaylists"]')
      .contains("abc")
      .click();
    cy.url().should("not.eq", "http://52.205.254.29/");
  });

  it("Click on ownerName inside of a playList", () => {
    cy.visit("http://52.205.254.29/");
    cy.contains("Login").click();
    cy.get('[testid="email input"]').type("asasas@asasas.com");
    cy.get('[type="password"]').type("123456789");
    cy.get('[id="login-btn"]').click();
    cy.contains(" WebPlayer ").click();
    cy.get('[class="card rounded col-lg-20% "]')
      .first()
      .click();
    cy.get('[id="owner_name"]').click();
    cy.url().should("not.eq", "http://52.205.254.29/");
  });

  it("SignUp Should not accept symbols in email", () => {
    cy.visit("http://52.205.254.29/");
    cy.contains("SignUp").click();
    var invalidEmail = "?3@yahoo.com";
    cy.get('[placeholder="Email"]').type(invalidEmail);
    cy.get('[placeholder="Confirm email"]').type(invalidEmail);
    cy.get('[type="password"]').type("123456789");
    cy.get('[placeholder="What should we call you?"]').type("human");
    cy.get('[testid="country input"]').select("Egypt");
    cy.get('[placeholder="Day"]').type("1");
    cy.get('[testid="month of birth input"]').select("April");
    cy.get('[placeholder="Year"]').type("1999");
    cy.get('[value="m"]').check();
    cy.contains("Sign Up").click();
    cy.wait(1000);
    cy.url().should("not.eq", "http://52.205.254.29/");
  });

  it("Wrong Error messages when enters invalid Email", () => {
    cy.visit("http://52.205.254.29/");
    cy.contains("SignUp").click();
    var invalidEmail = "@yahoo.com";
    cy.get('[placeholder="Email"]').type(invalidEmail);
    cy.get('[placeholder="Confirm email"]').type(invalidEmail);
    cy.get('[type="password"]').type("123456789");
    cy.get('[placeholder="What should we call you?"]').type("human");
    cy.get('[testid="country input"]').select("Egypt");
    cy.get('[placeholder="Day"]').type("1");
    cy.get('[testid="month of birth input"]').select("April");
    cy.get('[placeholder="Year"]').type("1999");
    cy.get('[value="m"]').check();
    cy.contains("Sign Up").click();
    cy.should("exist", cy.get('[testid="email invalid error"]'));
  });
});
