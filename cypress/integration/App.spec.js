describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display when number buttons are pressed', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')

  })

it('should be able to chain multiple operations', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
})

it('should be able to handle negative numbers', () => {
  cy.get('#number1').click();
  cy.get('#operator_subtract').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '-1')

})

it('should return infinity when dividing with zero', () => {
  cy.get('#number1').click();
  cy.get('#operator_divide').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', 'Infinity')

})

})