var countPensioenTicket = 0;
var bedragPensioen = 0;

document.getElementById("decreaseBtnPensioen").onclick = function () {
  if (countPensioenTicket > 0) {
    countPensioenTicket -= 1;
  }
  (bedragPensioen = countPensioenTicket * 25), 00;

  document.getElementById("countLabelPensioen").innerHTML = countPensioenTicket;
  document.getElementById("TotaalbedragPensioen").innerHTML = bedragPensioen;
};
document.getElementById("increaseBtnPensioen").onclick = function () {
  countPensioenTicket += 1;
  (bedragPensioen = countPensioenTicket * 25), 00;
  document.getElementById("countLabelPensioen").innerHTML = countPensioenTicket;
  document.getElementById("TotaalbedragPensioen").innerHTML = bedragPensioen;
};
document.getElementById("resetBtnPensioen").onclick = function () {
  countPensioenTicket = 0;
  (bedragPensioen = countPensioenTicket * 25), 00;

  document.getElementById("countLabelPensioen").innerHTML = countPensioenTicket;
  document.getElementById("TotaalbedragPensioen").innerHTML = bedragPensioen;
};