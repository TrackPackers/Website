describe('Test login page of its functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4173/auth');
  });

  it('Switch between signin and signup page', () => {
    cy.get('a[aria-label="Sign up here"]').click();

    cy.get('p[aria-label="Login to your account"]').should(
      'have.text',
      'Register a new account'
    );

    cy.get('a[aria-label="Sign up here"]').click();

    cy.get('p[aria-label="Login to your account"]').should(
      'have.text',
      'Login to your account'
    );
  });

  it('show and hide password when clicking on the eye icon - Signin page', () => {
    // Find the password input element using its aria-label
    cy.get('input[aria-label="enter Password"]')
      .as('passwordInput')
      .type('123456');

    // Find the eye icon
    cy.get('a > svg').as('eyeIcon');

    // Click on the eye icon
    cy.get('@eyeIcon').click();

    // Verify that the input type has changed to 'text'
    cy.get('@passwordInput').should('have.attr', 'type', 'text');

    cy.get('@eyeIcon').click();

    cy.get('@passwordInput').should('have.attr', 'type', 'password');
  });

  it('show and hide password when clicking on the eye icon - Signup page', () => {
    cy.get('a[aria-label="Sign up here"]').click();

    // Find the password input element using its aria-label
    cy.get('input[aria-label="enter Password"]')
      .as('passwordInput')
      .type('123456');

    // Find the eye icon
    cy.get('a > svg').as('eyeIcon');

    // Click on the eye icon
    cy.get('@eyeIcon').click();

    // Verify that the input type has changed to 'text'
    cy.get('@passwordInput').should('have.attr', 'type', 'text');

    cy.get('@eyeIcon').click();

    cy.get('@passwordInput').should('have.attr', 'type', 'password');
  });

  it('Username can not contain spaces', () => {
    cy.get('a[aria-label="Sign up here"]').click();

    cy.get('input[aria-label="enter user name"]')
      .as('usernameInput')
      .type('John Doe');

    cy.get('@usernameInput').should('have.value', 'JohnDoe');
  });
});
