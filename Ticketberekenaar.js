let countBabyTicket = 0;

document.getElementById("decreaseBtnBaby").onclick = function () {
  if (countBabyTicket > 0) {
    countBabyTicket -= 1;
  }
  (bedrag = countBabyTicket * 5), 00;

  document.getElementById("countLabelBaby").innerHTML = countBabyTicket;
  document.getElementById("TotaalbedragBaby").innerHTML = bedrag;
};
document.getElementById("increaseBtnBaby").onclick = function () {
  countBabyTicket += 1;
  (bedrag = countBabyTicket * 5), 00;
  document.getElementById("countLabelBaby").innerHTML = countBabyTicket;
  document.getElementById("TotaalbedragBaby").innerHTML = bedrag;
};
document.getElementById("resetBtnBaby").onclick = function () {
  countBabyTicket = 0;
  (bedrag = countBabyTicket * 5), 00;

  document.getElementById("countLabelBaby").innerHTML = countBabyTicket;
  document.getElementById("TotaalbedragBaby").innerHTML = bedrag;
};


