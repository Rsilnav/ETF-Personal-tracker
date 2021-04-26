describe('Dashboard', () => {
  it('should find the title of the Dashboard page', () => {
    cy.visit('/');
    cy.get('h1').contains('Dashboard');
  });

  it('should go to the Home in the right cases', () => {
    cy.visit('/test');
    cy.get('h1').contains('Dashboard');
    cy.visit('/');
    cy.get('h1').contains('Dashboard');
    cy.visit('/home');
    cy.get('h1').contains('Dashboard');
  });
});
