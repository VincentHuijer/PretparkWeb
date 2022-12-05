export default function HeaderFP() {
  return (
    <header>
      <link rel="stylesheet" type="text/css" href="/PretparkWebsite.css" />
      <title>Welkom bij de Efteling!</title>
      <div id="Menubalk">
        <a href="PretparkFrontPage.html">
          <img
            src="Afbeeldingen\EftelingLogo.png"
            alt="Terug naar het hoofdmenu"
          ></img>
        </a>
        <div>
          <a href="PretparkOverOns.html" className="nav">
            Over Ons
          </a>
        </div>
        <div>
          <a href="PretparkTickets.html" className="nav">
            Bestel nu tickets!
          </a>
        </div>
      </div>
    </header>
  );
}
