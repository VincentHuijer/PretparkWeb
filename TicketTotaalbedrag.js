function update(){
     let babyprijs = document.getElementById("TotaalbedragBaby").innerHTML;
     let kindprijs = document.getElementById("TotaalbedragKind").innerHTML;
     let volwassenprijs = document.getElementById("TotaalbedragVolwassen").innerHTML;
     let pensioenprijs = document.getElementById("TotaalbedragPensioen").innerHTML;

    let totaalBedrag = Number(babyprijs) + Number(kindprijs) + Number(volwassenprijs) + Number(pensioenprijs);
    
    document.getElementById("Totaalbedrag").innerHTML = totaalBedrag;
}