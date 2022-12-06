import { useState } from "react";

export default function BodyTV() {
  let [baby, setBaby] = useState(0);
  let [kind, setKind] = useState(0);
  let [volwassen, setVolwassen] = useState(0);
  let [pensioen, setPensioen] = useState(0);

  const babyprijs = 5;
  const kindprijs = 30;
  const volwassenprijs = 40;
  const pensioenprijs = 25; 

  function plusTicket(type) {
    if (type === "baby") {
      setBaby(baby + 1);
    }
    if (type === "kind") {
      setKind(kind + 1);
    }
    if (type === "volwassen") {
      setVolwassen(volwassen + 1);
    }
    if (type === "Pensioen") {
      setPensioen(pensioen + 1);
    }
  }

  function minTicket(type) {
    if (type === "baby" && baby > 0) {
      setBaby(baby - 1);
    }
    if (type === "kind" && kind > 0) {
      setKind(kind - 1);
    }
    if (type === "volwassen" && volwassen > 0) {
      setVolwassen(volwassen - 1);
    }
    if (type === "Pensioen" && pensioen > 0) {
      setPensioen(pensioen - 1);
    }
  }

  function resetTicket(type) {
    if (type === "baby") {
      setBaby((baby = 0));
    }
    if (type === "kind") {
      setKind((kind = 0));
    }
    if (type === "volwassen") {
      setVolwassen((volwassen = 0));
    }
    if (type === "Pensioen") {
      setPensioen((pensioen = 0));
    }
  }

  return (
    <div className="nav">
      <img src="Afbeeldingen\MinusButton.png" alt="-"></img>
      <button onClick={() => minTicket("baby")} id="decreaseBtnBaby">
        -1 ticket
      </button>
      <p>Baby ticket 0-3 5,00€ </p>
      <img src="Afbeeldingen\Plusbutton.png" alt="+"></img>
      <button onClick={() => plusTicket("baby")} id="increaseBtnBaby">
        +1 ticket
      </button>
      <p> aantal tickets: </p>
      <img src="Afbeeldingen/PersonCount.png" alt="Aantal personen"></img>
      <label id="countLabelBaby">{baby}</label>

      <button onClick={() => resetTicket("baby")} id="resetBtnBaby">
        {" "}
        reset aantal tickets{" "}
      </button>
      <p> Prijs is: € </p>
      <label id="TotaalbedragBaby">{baby * babyprijs}</label>

      <div className="nav">
        <img src="Afbeeldingen\MinusButton.png" alt="-"></img>
        <button onClick={() => minTicket("kind")} id="decreaseBtnKind">
          -1 ticket
        </button>
        <p>Kind ticket 4-17 30,00€ </p>
        <img src="Afbeeldingen\Plusbutton.png" alt="+"></img>
        <button onClick={() => plusTicket("kind")} id="increaseBtnKind">
          +1 ticket
        </button>
        {/* <button onclick="PlusKind()" alt="+">
          {" "}
          +1
        </button> */}
        <p> aantal tickets: </p>
        <img src="Afbeeldingen/PersonCount.png" alt="Aantal personen"></img>
        <label id="countLabelKind">{kind}</label>
        <button onClick={() => resetTicket("kind")} id="resetBtnKind">
          {" "}
          reset aantal TicketSoort
        </button>
        <p> Prijs is: €</p>
        <label id="TotaalbedragKind">{kind * babyprijs}</label>
      </div>

      <div className="nav">
        <img src="Afbeeldingen\MinusButton.png" alt="-knop"></img>
        <button
          onClick={() => minTicket("volwassen")}
          id="decreaseBtnVolwassen"
        >
          -1 ticket
        </button>
        <p>Volwassen ticket 18-64 40,00€ </p>
        <img src="Afbeeldingen\Plusbutton.png" alt="+"></img>
        <button
          onClick={() => plusTicket("volwassen")}
          id="increaseBtnVolwassen"
        >
          +1 ticket
        </button>
        <p> aantal tickets: </p>hb/
        <img src="Afbeeldingen/PersonCount.png" alt="Aantal personen"></img>
        <label id="countLabelVolwassen">{volwassen}</label>
        <button onClick={() => resetTicket("volwassen")} id="resetBtnVolwassen">
          {" "}
          reset aantal tickets{" "}
        </button>
        <p> Prijs is: € </p>
        <label id="TotaalbedragVolwassen">{pensioen * volwassenprijs}</label>
      </div>

      <div className="nav">
        <img src="Afbeeldingen\MinusButton.png" alt="-"></img>
        <button onClick={() => minTicket("pensioen")} id="decreaseBtnPensioen">
          -1 ticket
        </button>
        <p>Pensioeneerd ticket 65+ 25,00€ </p>
        <img src="Afbeeldingen\Plusbutton.png" alt="+"></img>
        <button onClick={() => plusTicket("pensioen")} id="increaseBtnPensioen">
          +1 ticket
        </button>
        <p> aantal tickets: </p>
        <img src="Afbeeldingen/PersonCount.png" alt="Aantal personen"></img>
        <label id="countLabelPensioen">{pensioen}</label>
        <button onClick={() => resetTicket("pensioen")} id="resetBtnPensioen">
          {" "}
          reset aantal tickets{" "}
        </button>
        <p> Prijs is: €</p>
        <label id="TotaalbedragPensioen">{pensioen * pensioenprijs}</label>
      </div>

      <div>
        <p>Totaalbedrag: </p>
        <label id="totaalbedrag">{babyprijs + kindprijs + volwassenprijs + pensioenprijs}</label>
      </div>

      <a href="PretparkFrontPage.html">
        <img
          src="Afbeeldingen\EftelingLogo.png"
          width="75px"
          height="75px"
          alt="Terug naar het hoofdmenu"
        />
      </a>

      <span id="timer"></span>
    </div>
  );
}
