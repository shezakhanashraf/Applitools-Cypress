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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import TestDataFile from "../fixtures/TestData.json"
import loginLocators from "../locators/loginPageLocators.js";

Cypress.Commands.add('login', (userName, password) => {
    // Visit the login URL
    
    cy.visit(Cypress.config('baseUrl'));

    //cy.get(loginLocators.usernameInput).type(TestDataFile.login.userName);
    //cy.get(loginLocators.passwordInput).type(TestDataFile.login.password);


    //To fetch data from enviroment variable follow this code:https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypressenvjson
    
    cy.get(loginLocators.usernameInput).type(Cypress.env('CYPRESS_USERNAME'));
    cy.get(loginLocators.passwordInput).type(Cypress.env('CYPRESS_PASSWORD'));
    cy.get(loginLocators.loginButton).click();
  });
  