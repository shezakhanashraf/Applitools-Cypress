export const clickElement = (elementSelector) => {
  cy.get(elementSelector).click();
};

export const assertElement = (elementSelector, assertion) => {
  cy.get(elementSelector).should(assertion);
};

export const isElementDisplayed = (elementSelector) => {
  cy.get(elementSelector).should('be.visible');
};

export const typeText = (elementSelector, text) => {
  cy.get(elementSelector).type(text);
};
