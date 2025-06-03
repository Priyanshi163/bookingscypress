describe('Sample Test', () => {
  it('Visits Example.com', () => {
    cy.visit('https://orufy.com/about-us');
    cy.title().should('include', 'Orufy')
  });
});
