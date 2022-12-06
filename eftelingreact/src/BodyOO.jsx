export default function BodyOO() {
  return (
<main class="content">
    <div class="OverOnsInfo">
      <header>
        <h1>
          Het pretpark
        </h1>
        <p> Ons pretpark is een wonderbaarlijke ervaring voor alle leeftijden. Door ons groot assortiment aan opties in
          activiteiten kan je je nooit vervelen. Kom langs bij onze achtbanen, ons doolhof, de griezelhuizen, de
          zweefmolen of geniet van eten in onze restaurants.</p>
      </header>
      <img src={require('./OverOnsPaardAttractie.png')} alt="PaardAttractie"></img>
    </div>
    
    <div class ="OverOnsInfo">
      <header>
        <h1>
          Onze CEO
        </h1>
        <p>
          Sinds september 1991 is Van Baarsen werkzaam bij de Efteling.
          Eerst als assistent-controller, daarna als controller en concerncontroller, later hoofd van de afdeling
          Financiële Zaken.
          Hij is sinds 2008 financieel directeur en bij een herschikking van de taken per 1 januari 2022 werd hij
          directeur Finance & Support.</p>
        
      </header>
      <img src={require('./OverOnsCeo.png')} alt="CEO"></img>
      </div>
      </main>
);
}