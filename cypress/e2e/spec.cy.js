describe('PaginaBereikbaar', () => {
  it('passes', () => {
    cy.visit('http://localhost:5248')
  })
})

describe('TestDeBoeking', () => {


  //TEST ANDERE PAGINA
  //TEST CORRECT INVOEREN FORMULIER
  it('kan boeken', () => {
    cy.visit('http://localhost:5248')
    //ga naar /boek
    cy.get('a[href*="/boek"]').click()
    //pak het dag veld
    cy.get('input[name="dag"]').type('1')
    //pak het aantal mensen veld
    cy.get('input[name="aantal"]').type('5')
    //pak het email veld
    cy.get('input[name="email"]').type('test@test.com')
    //submit de boeking
    cy.get('input[type="submit"]').click()

    cy.contains("Geboekt!")
  })

  // TEST FORMULIER ERROR HANDLING
  it('geeft redirect', () => {
    cy.intercept({
      method: "POST",
      url: "http://localhost:5248/boek"
    }).as('request')

    cy.visit('https://localhost:44455/boek')
    //pak het dag veld
    cy.get('input[name="dag"]').type('3')
    //pak het aantal mensen veld
    cy.get('input[name="aantal"]').type('11')
    //pak het email veld
    cy.get('input[name="email"]').type('test@test')
    //submit de boeking
    cy.get('input[type="submit"]').click()
    // maak van body code en daarna 400
    cy.wait("@request")
    cy.wait("@request").then((interception) => {
      expect(interception.response.statusCode).to.equal(307)
    })
  })
})