describe("Navigation", () => {


  it("should visit root", () => {

    // Visits base URL from cypess.json
    cy.visit("/");

  });


  it("should navigate to Tuesday", () =>{

    // Visits base URL from cypess.json
    cy.visit("/");
    cy.contains("[data-testid=day]",'Tuesday')
    .click()
    .should("have.class", "day-list__item--selected");

  });

});