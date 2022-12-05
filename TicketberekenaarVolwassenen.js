var countVolwassenTicket = 0;
var bedragVolwassen = 0;

document.getElementById("decreaseBtnVolwassen").onclick = function () {
  if (countVolwassenTicket > 0) {
    countVolwassenTicket -= 1;
  }
  (bedragVolwassen = countVolwassenTicket * 40), 00;

  document.getElementById("countLabelVolwassen").innerHTML = countVolwassenTicket;
  document.getElementById("TotaalbedragVolwassen").innerHTML = bedragVolwassen;
};
document.getElementById("increaseBtnVolwassen").onclick = function () {
  countVolwassenTicket += 1;
  (bedragVolwassen = countVolwassenTicket * 40), 00;
  document.getElementById("countLabelVolwassen").innerHTML =
    countVolwassenTicket;
  document.getElementById("TotaalbedragVolwassen").innerHTML = bedragVolwassen;
};
document.getElementById("resetBtnVolwassen").onclick = function () {
  countVolwassenTicket = 0;
  (bedragVolwassen = countVolwassenTicket * 40), 00;

  document.getElementById("countLabelVolwassen").innerHTML =
    countVolwassenTicket;
  document.getElementById("TotaalbedragVolwassen").innerHTML = bedragVolwassen;
};
