// Because top posts are currently not implemented, it should display "No top posts available"

describe('Clicking the top button should show correct Text"', () => {
  it('should change the text of another element', () => {
    cy.visit('http://localhost:5173');

    cy.contains('a', 'Top').click();

    cy.contains('h1', 'No top posts available');
  });
});
