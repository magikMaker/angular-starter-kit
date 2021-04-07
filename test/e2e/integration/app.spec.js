/// <reference types="Cypress" />

describe('App default page', () => {
  it('should display the app name on the home page', () => {
    cy.visit('/'); // go to the home page

    // get the rocket element and verify that the app name is in it
    cy.get('[data-test="site-title"]')
      .should('contain.text', 'Site Title');
  });
});
