 export default function BodyTV() {
    return (
  <div class="nav"> 
  <img src="Afbeeldingen\MinusButton.png" />
  <button id="decreaseBtnBaby">-1 ticket</button>
  <p>Baby ticket 0-3 5,00€ </p>
  <img src="Afbeeldingen\Plusbutton.png" />
  <button id="increaseBtnBaby">+1 ticket</button>
  <p> aantal tickets: </p>
  <img src="Afbeeldingen/PersonCount.png" />
  <label id="countLabelBaby">0</label>

  <button id="resetBtnBaby"> reset aantal tickets </button>
  <p> Prijs is: € </p>
  <label id="TotaalbedragBaby">0</label>


<div class="nav"> 
  <img src="Afbeeldingen\MinusButton.png" />
  <button id="decreaseBtnKind">-1 ticket</button>
  <p>Kind ticket 4-17 30,00€ </p>
  <img src="Afbeeldingen\Plusbutton.png" />
  <button id="increaseBtnKind">+1 ticket</button>
  <p> aantal tickets: </p>
  <img src="Afbeeldingen/PersonCount.png" />
  <label id="countLabelKind">0</label>
  <button id="resetBtnKind"> reset aantal TicketSoort</button>
  <p> Prijs is: €</p>
  <label id="TotaalbedragKind">0</label>
</div>


<div class="nav"> 
  <img src="Afbeeldingen\MinusButton.png" alt ="-knop" ></img>
  <button id="decreaseBtnVolwassen">-1 ticket</button>
  <p>Volwassen ticket 18-64 40,00€ </p>
  <img src="Afbeeldingen\Plusbutton.png" />
  <button id="increaseBtnVolwassen">+1 ticket</button>
  <p> aantal tickets: </p>
  <img src="Afbeeldingen/PersonCount.png" />
  <label id="countLabelVolwassen">0</label>
  <button id="resetBtnVolwassen"> reset aantal tickets </button>
  <p> Prijs is: € </p>
  <label id="TotaalbedragVolwassen">0</label>
</div>


<div class="nav"> 
  <img src="Afbeeldingen\MinusButton.png" />
  <button id="decreaseBtnPensioen">-1 ticket</button>
  <p>Pensioeneerd ticket 65+ 25,00€ </p>
  <img src="Afbeeldingen\Plusbutton.png" />
  <button id="increaseBtnPensioen">+1 ticket</button>
  <p> aantal tickets: </p>
  <img src="Afbeeldingen/PersonCount.png" />
  <label id="countLabelPensioen">0</label>
  <button id="resetBtnPensioen"> reset aantal tickets </button>
  <p> Prijs is: €</p>
  <label id="TotaalbedragPensioen">0</label>

</div>

<div>
  <p>Totaalbedrag: </p>
  <label id="totaalbedrag">0</label>
</div> 

<a href="PretparkFrontPage.html"><img src="Afbeeldingen\EftelingLogo.png" width="75px" height="75px" alt="Terug naar het hoofdmenu"/></a>

<span id="timer"></span> 

 {/* <script src="TicketBestellenNieuw.jsx"></script>
{/* <script> ReactDom.render(<TicketSoort/>, document.querySelector("TicketSoort")) </script> --> */}



{/* <script src="TicketberekenaarBaby.js"></script>
<script src="TicketberekenaarKind.js"></script>
<script src="TicketberekenaarVolwassenen.js"></script>
<script src="TicketberekenaarPensioen.js"></script>
<script src="TicketTotaalbedrag.js"></script>

  <script src="AftelTimer.js"></script>
 */}

</div> );}
