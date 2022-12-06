import BodyTV from "./BodyTV";


var countKindTicket = 0;
var bedragKind = 0;

document.getElementById("decreaseBtnKind").onclick = function () {
  if (countKindTicket > 0) {
    countKindTicket -= 1;
  }
  (bedragKind = countKindTicket * 30), 00;

  document.getElementById("countLabelKind").innerHTML = countKindTicket;
  document.getElementById("TotaalbedragKind").innerHTML = bedragKind;
};
document.getElementById("increaseBtnKind").onclick = function () {
  countKindTicket += 1;
  (bedragKind = countKindTicket * 30), 00;
  document.getElementById("countLabelKind").innerHTML = countKindTicket;
  document.getElementById("TotaalbedragKind").innerHTML = bedragKind;
};
document.getElementById("resetBtnKind").onclick = function () {
  countKindTicket = 0;
  (bedragKind = countKindTicket * 30), 00;

  document.getElementById("countLabelKind").innerHTML = countKindTicket;
  document.getElementById("TotaalbedragKind").innerHTML = bedragKind;
};

