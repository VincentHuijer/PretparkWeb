var countBabyTicket = 0;
var bedragBaby = 0;

document.getElementById("decreaseBtnBaby").onclick = function () {
  if (countBabyTicket > 0) {
    countBabyTicket -= 1;
  }
  (bedragBaby = countBabyTicket * 5), 00;

  document.getElementById("countLabelBaby").innerHTML = countBabyTicket;
  document.getElementById("TotaalbedragBaby").innerHTML = bedragBaby;
};
document.getElementById("increaseBtnBaby").onclick = function () {
  countBabyTicket += 1;
  (bedragBaby = countBabyTicket * 5), 00;
  document.getElementById("countLabelBaby").innerHTML = countBabyTicket;
  document.getElementById("TotaalbedragBaby").innerHTML = bedragBaby;
};
document.getElementById("resetBtnBaby").onclick = function () {
  countBabyTicket = 0;
  (bedragBaby = countBabyTicket * 5), 00;

  document.getElementById("countLabelBaby").innerHTML = countBabyTicket;
  document.getElementById("TotaalbedragBaby").innerHTML = bedragBaby;
};



// document.getElementById("decreaseBtnKind").onclick = function () {
//   if (countKindTicket > 0) {
//     countKindTicket -= 1;
//   }
//   (bedragKind = countKindTicket * 30), 00;

//   document.getElementById("countLabelKind").innerHTML = countKindTicket;
//   document.getElementById("TotaalbedragKind").innerHTML = bedragKind;
// };
// document.getElementById("increaseBtnKind").onclick = function () {
//   countKindTicket += 1;
//   (bedragKind = countKindTicket * 30), 00;
//   document.getElementById("countLabelKind").innerHTML = countKindTicket;
//   document.getElementById("TotaalbedragKind").innerHTML = bedragKind;
// };
// document.getElementById("resetBtnKind").onclick = function () {
//   countKindTicket = 0;
//   (bedragKind = countKindTicket * 30), 00;

//   document.getElementById("countLabelKind").innerHTML = countKindTicket;
//   document.getElementById("TotaalbedragKind").innerHTML = bedragKind;
// };


// var countVolwassenTicket = 0;

// document.getElementById("decreaseBtnVolwassen").onclick = function () {
//   if (countVolwassenicket > 0) {
//     countVolwassenTicket -= 1;
//   }
//   (bedragVolwassen = countVolwassennenTicket * 5), 00;

//   document.getElementById("countLabelVolwassen").innerHTML = countVolwassenTicket;
//   document.getElementById("TotaalbedragVolwassen").innerHTML = bedragVolwassen;
// };
// document.getElementById("increaseBtnVolwassen").onclick = function () {
//   countVolwassenTicket += 1;
//   (bedragVolwassen = countVolwassenTicket * 40), 00;
//   document.getElementById("countLabelVolwassen").innerHTML =
//     countVolwassenTicket;
//   document.getElementById("TotaalbedragVolwassen").innerHTML = bedragVolwassen;
// };
// document.getElementById("resetBtnVolwassen").onclick = function () {
//   countVolwassenTicket = 0;
//   (bedragVolwassen = countVolwassenTicket * 40), 00;

//   document.getElementById("countLabelVolwassen").innerHTML =
//     countVolwassenTicket;
//   document.getElementById("TotaalbedragVolwassen").innerHTML = bedragVolwassen;
// };
