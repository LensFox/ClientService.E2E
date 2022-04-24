describe("Check main page", () => {
  it("Should have table", () => {
    cy.visit("/");

    cy.get("table");
  });

  it("Should have labels 'Id' and 'Name'", () => {
    cy.visit("/");

    const table = cy.get("table");

    table.contains("Id");
    table.contains("Name");
  });
});
