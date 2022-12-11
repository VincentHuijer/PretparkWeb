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
    if (type === "pensioen") {
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
    if (type === "pensioen" && pensioen > 0) {
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
    if (type === "pensioen") {
      setPensioen((pensioen = 0));
    }
  }

  return (
  
    <div className="ticketContent">
       <div class="ticketsTitle">
        <p>Kaartjes bestellen</p>
    </div>
    <div class="labels">
      <p class="leeftijdTitle">Leeftijdscategorie</p>

    </div>
      <div class="ticketButtons">
        <button>
          <img
            src={require("./MinusButton.png")}
            alt="-"
            onClick={() => minTicket("baby")}
            id="decreaseBtnBaby"
          />
        </button>
        <p> ticket leeftijd: t/m 3 5,00 €  </p>
        <button>
          <img
            src={require("./PlusButton.png")}
            alt="-"
            onClick={() => plusTicket("baby")}
            id="increaseBtnBaby"
          />
        </button>

        <p> aantal tickets: </p>
        <img src={require("./PersonCount.png")} alt="Aantal personen"></img>
        <label id="countLabelBaby">{baby}</label>

        <button onClick={() => resetTicket("baby")} id="resetBtnBaby">
          {" "}
          reset aantal tickets{" "}
        </button>
        <p> Prijs is: € </p>
        <label id="TotaalbedragBaby">{baby * babyprijs}</label>
      </div>

      <div class="ticketButtons">
        <button>
          <img
            src={require("./MinusButton.png")}
            alt="-"
            onClick={() => minTicket("kind")}
            id="decreaseBtnKind"
          />
        </button>

        <p> ticket leeftijd 4-17: 30,00 € </p>
        <button>
          <img
            src={require("./PlusButton.png")}
            alt="-"
            onClick={() => plusTicket("kind")}
            id="increaseBtnKind"
          />
        </button>

        <p> aantal tickets: </p>
        <img src={require("./PersonCount.png")} alt="Aantal personen"></img>
        <label id="countLabelKind">{kind}</label>
        <button onClick={() => resetTicket("kind")} id="resetBtnKind">
          {" "}
          reset aantal tickets
        </button>
        <p> Prijs is: €</p>
        <label id="TotaalbedragKind">{kind * babyprijs}</label>
      </div>
      <div class="ticketButtons">
          <button>
            <img
              src={require("./MinusButton.png")}
              alt="-"
              onClick={() => minTicket("volwassen")}
              id="decreaseBtnVolwassen"
            />
          </button>

          <p> ticket leeftijd 18-64 40,00€</p>
          <button>
            <img
              src={require("./PlusButton.png")}
              alt="-"
              onClick={() => plusTicket("volwassen")}
              id="increaseBtnVolwassen"
            />
          </button>

          <p> aantal tickets: </p>
          <img src={require("./PersonCount.png")} alt="Aantal personen"></img>
          <label id="countLabelVolwassen">{volwassen}</label>
          <button
            onClick={() => resetTicket("volwassen")}
            id="resetBtnVolwassen"
          >
            {" "}
            reset aantal tickets{" "}
          </button>
          <p> Prijs is: € </p>
          <label id="TotaalbedragVolwassen">{volwassen * volwassenprijs}</label>
      </div>
      <div class="ticketButtons">
        <button>
          <img
            src={require("./MinusButton.png")}
            alt="-"
            onClick={() => minTicket("pensioen")}
            id="decreaseBtnVolwassen"
          />
        </button>

        <p>ticket leeftijd: {'>'} 65 25,00 € </p>
        <button>
          <img
            src={require("./PlusButton.png")}
            alt="-"
            onClick={() => plusTicket("pensioen")}
            id="increaseBtnPensioen"
          />
        </button>

        <p> aantal tickets: </p>
        <img src={require("./PersonCount.png")} alt="Aantal personen"></img>
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
        <label id="totaalbedrag">
          {baby * babyprijs +
            kindprijs * kind +
            volwassenprijs * volwassen +
            pensioenprijs * pensioen}
        </label>
      </div>
      <a id="Zandloper"href="PretparkFrontPage.html"><img src={require("./Zandloper.png")} width="75px" height="75px" alt="Terug naar het hoofdmenu"></img>
</a>
<div id="timer"></div> 
<script src="AftelTimer.js"></script>

      <span id="timer"></span>
    </div>
    
  );
}
