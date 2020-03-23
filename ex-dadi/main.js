alert("BENVENUTO AL GIOCO DEI DADI");

alert("Prego, tira pure il tuo dado")
// chiedere all'utente di tirare un dado
var first = Math.floor(Math.random() * 6) +1;
alert("il tuo tiro è stato " + first);
// chiedere alla macchina di tirare l'altro
alert("Ora tocca al computer");
var second = Math.floor(Math.random() * 6) +1;
alert("il tiro del computer è stato " + second);
//var del risultato
var result;
//decretare il vincitore
if (first > second) {
  result = "complimenti, HAI VINTO " + first + " a " + second;
} else if (first < second) {
  result = "mi dispiace, HAI PERSO " + second + " a " + first;
} else {
  result = "ATTENZIONE, PAREGGIO CON " + second + " a " + first;
}

document.getElementById('asd').innerHTML = result;

//output del vincitore
