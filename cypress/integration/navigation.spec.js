/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to conference sessions page', () => {
    cy.clickConferenceViewSessions();

    cy.url().should('include', '/sessions');
  });
});
