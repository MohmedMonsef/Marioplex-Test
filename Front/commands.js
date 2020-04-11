// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", index => {
  cy.fixture("Test").then(Data => {
    cy.get('[testid="email input"]').type(Data[index].Email);
    cy.get('[testid="password input"]').type(Data[index].Password);
    cy.get('[testid="log in button"]').click();
    cy.wait(3000);
    cy.get(".unlogged").should(obj => {
      expect(obj).to.not.exist;
    });
  });
});
Cypress.Commands.add("signup", index => {
  cy.fixture("Test").then(Data => {
    cy.get('[testid="email input"]').type(Data[index].Email);
    cy.get('[testid="confirm email input"]').type(Data[index].Email);
    cy.get('[testid="password input"]').type(Data[index].Password);
    cy.get('[testid="username input"]').type(Data[index].username);
    cy.get('[testid="country input"]').select(Data[index].country);
    cy.get('[testid="day of birth input"]').type(Data[index].day);
    cy.get('[testid="month of birth input"]').select(Data[index].month);
    cy.get('[testid="year of birth input"]').type(Data[index].year);
    if (Data[index].gender == "male") {
      cy.get('[testid="gender male radio button"]').check();
    } else {
      cy.get('[testid="gender female radio button"]').check();
    }
    cy.get('[testid="sign up button"]').click();
    cy.wait(3000);
    cy.get('[testid="email not unique error"]').should(obj => {
      expect(obj).to.not.exist;
    });
  });
});
