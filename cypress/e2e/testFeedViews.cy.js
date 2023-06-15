// Because top posts are currently not implemented, it should display "No top posts available"

describe('Clicking the top button should show correct Text"', () => {
  it('UC5:TC2: should change the text of another element', () => {
    cy.visit('http://localhost:4173');

    cy.contains('a', 'Top').click();

    cy.contains('h1', 'No top posts available');
  });
});
