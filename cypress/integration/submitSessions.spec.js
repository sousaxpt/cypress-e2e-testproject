/// <reference types="cypress" />

describe('Submit sessions', () => {
  // Run before each test in this describe block

  beforeEach(() => {
    cy.clickConferenceViewSessions();

    cy.url().should('include', '/sessions');
    cy.get('a').contains('Submit a Session!').click();
  });

  it('should navigate to submit sessions page', () => {
    cy.url().should('include', '/sessions/new');
  });

  it('should submit a session successfully', () => {
    // fill the form
    cy.contains('Title').type('New session title');
    cy.contains('Description').type('This is a Great session');
    cy.contains('Day').type('Thurday');
    cy.contains('Level').type('Advanced');

    //submit form
    cy.get('form').submit();

    //validate that form was submitted sucessfully
    cy.contains('Session Submitted Successfully!');
  });
});
