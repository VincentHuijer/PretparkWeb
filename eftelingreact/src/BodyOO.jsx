export default function BodyOO() {
  return (
  <main class="content overOnsContent">
    <div class="OverOnsInfo">
      <header>
        <h1>
          Het pretpark
        </h1>
        <p> Ons pretpark is een wonderbaarlijke ervaring voor alle leeftijden. Door ons groot
          assortiment aan opties in
          activiteiten kan je je nooit vervelen. Kom langs bij onze achtbanen, ons doolhof, de griezelhuizen, de
          zweefmolen of geniet van eten in onze restaurants. Er is altijd wel een plekje voor iedereen om een prachtige
          dag te doorbrengen bij de Efteling!</p>
      </header>
      <img src={require('./OverOnsPaardAttractie.png')} alt="PaardAttractie"></img>
    </div>
    
    <div class ="OverOnsInfo">
      <header>
        <h1>
          Onze CEO
        </h1>
        <p>
         Van Baarsen is sinds 1 februari de nieuwe Directeur Park van de Efteling.
          Hij nam het stokje over van Coen Bertens, die na 23 jaar afscheid neemt van de Efteling.
          De directie van de Efteling bestaat nu uit vier personen:
          Fons Jurgens (Algemeen Directeur),
          Daan van Baarsen (Financieel Directeur),
          Koen Sanders (Directeur Commercie,
          Creatie en Ontwikkeling en Hotels & Resorts.) </p>
        
      </header>
      <img src={require('./OverOnsCeo.png')} alt="CEO"></img>
      </div>
      </main>
);
}