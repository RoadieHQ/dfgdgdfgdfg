describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to dfgdgd').click();
  })
})
