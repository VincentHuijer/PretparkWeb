const timer = 0;

beforeEach(() =>{
  cy.visit('http://127.0.0.1:5500/PretparkFrontPage.html');

});

it('has a title'),() =>{
  cy.contains('Welkom bij de Efteling!');
}