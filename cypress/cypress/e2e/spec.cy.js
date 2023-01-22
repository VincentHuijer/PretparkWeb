describe('Boeking', () => {


  it('Kan Boeken', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/boek"]').click()
    cy.get("input[knopnaam=1button]").click();
    cy.get('input[name=amount]').type('1');
    cy.get("input[name=email]").type('Dummy@gmail.com');
    cy.get("input[name=bestelKnop]").click();

    cy.get("p").contains("Succesvol Geboekt");
  });


  it('Kan Niet Boeken (volgeboekt)', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/boek"]').click()
    cy.get("input[knopnaam=4button]").should('be.disabled')
  })

  it('Kan Niet boeken(meer dan 10 mensen)', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/boek"]').click()
    cy.get("input[knopnaam=5button]").click();
    cy.get('input[name=amount]').type('69');
    cy.get("input[name=email]").type('Dummy@gmail.com');
    cy.get("input[name=bestelKnop]").click();
    cy.get("p").contains("Helaas, Er zijn geen plekken beschikbaar op deze datum")
  })
  //interception spying
  it('Hoeveelheid Check', () => {
    cy.intercept({
      method: "GET",
      url: "https://localhost:7277/Boeking/Boekingen"
    }).as('request')

    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/boek"]').click()

    cy.wait("@request").then((interception) => {
      assert.deepEqual(interception.response.body[0], { "dayNumber": 1, "amount": 1 })
    })
  })

  it('Andere pagina bezoeken', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="/boek"]').click()
    cy.url().should('include', '/boek')
  })
});
