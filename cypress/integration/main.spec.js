describe("Vibe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Landing", () => {
    it("shows the correct browser title", () => {
      cy.title().should("include", "Vibe");
    });
  });

  it("navigates to Login", () => {
    cy.get('[data-cy="nav-login"]').click();

    cy.location("pathname").should("include", "/login");
  });
  describe("Add look", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/create");
    });

    it("shows error for invalid input", () => {
      cy.get('[data-cy="pressed-submit"]').click();

      cy.get('form  [data-cy="error"]').should("have.length", 1);

      cy.get('form  [data-cy="error"]').should("contain", "Please add a title");
    });
  });
});
