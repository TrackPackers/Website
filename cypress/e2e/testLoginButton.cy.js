describe('Clicking the login button should send you to the correct page"', () => {
  it("should change the url to '/auth'", () => {
    cy.visit('http://localhost:4173');
    cy.contains('a', 'Login').click();
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/auth');
    });
  });
});
