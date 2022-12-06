import BodyTV from "./BodyTV";

var countBabyTicket = 0;
var bedragBaby = 0;
var totaalbedragAlles = 0;
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