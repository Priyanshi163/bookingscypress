describe('Sample Test', () => {
  it('Visits Example.com', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
  });
});
