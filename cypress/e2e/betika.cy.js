describe('Betika Login and Place Bet - Without funds', () => {
  beforeEach(() => {
    cy.visit('https://www.betika.com/en-ke/login')
    cy.get('.session__form__phone > .input').type("0746987680")
    cy.get('.session__form__password__container > .input__container > .input').type("2323")
  })
  it('Login & Place bet', () => {
    cy.get('.session__form__button__container > .button').click()
    cy.get(':nth-child(7) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(1) > .prebet-match__odd__odd-value').click({ force: true })
    cy.get(':nth-child(8) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(2) > .prebet-match__odd__odd-value').click({ force: true })
    cy.get(':nth-child(9) > .prebet-match__odd-market__container > .prebet-match__odds__container > .prebet-match__odds > :nth-child(3) > .prebet-match__odd__odd-value').click({ force: true })
    cy.get('.nav__betslip').click()
    cy.get('.input__container > .input').clear().type("10")
    cy.get('.betslip__details__button__place').click({ force: true })
})
})
describe('Deposit funds', () => {
  it('Deposit', () => {
    cy.get('.session__form__button__container > .button').click()
    cy.contains('Deposit').click({ multiple: true, force: true })
    cy.contains('+500').click()
    cy.get('.account__payments__submit > span').click()
    cy.get('.nav > [href="/en-ke/profile"]').click()
    cy.get('.account__section__support > button.button').scrollIntoView().should('be.visible').click()
    cy.wait(500)
    cy.contains('Login').should('have.value', 'Login') // assert successful logout

  })
})
