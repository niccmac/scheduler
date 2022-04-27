describe('Apointments.', () => {
 
  // Reset DB before running tests
  
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset")
    cy.visit("/")
    cy.contains('Monday')
  });

  xit('Should book an interview.', () => {
    
    cy.get('.appointment__add-button')
      .first()
      .click()
      .get('[data-testid="student-name-input"]')
      .type('Lydia Miller-Jones', { delay: 150 })
      .get("[alt='Sylvia Palmer']")
      .click()

    cy.contains("Save")
      .click()

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer")
  });

  xit('Should edit an interview.', () => {
    
    cy.get( '[alt="Edit"]')
      .click({force: true})
      .get('[data-testid="student-name-input"]')
      .clear()
      .type('Lydia Miller-Jones', { delay: 150 })
      .get("[alt='Tori Malcolm']")
      .click()

    cy.contains("Save")
      .click()

      cy.contains(".appointment__card--show", "Lydia Miller-Jones");
      cy.contains(".appointment__card--show", "Tori Malcolm");

  });

  it('Should cancel an interview.',() => {

    cy.get( '[alt="Delete"]')
      .click({force: true})

    cy.contains("Confirm")
      .click()

    cy.get('.appointment__status-image').should('exist')
    cy.get('.appointment__status-image').should('not.exist')

    
    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");

  });

});
