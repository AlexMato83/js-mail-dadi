
/*1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato; */

//far inserire e-mail
var insertMail = prompt("prego inserisci la tua mail");

// mettiamo Gianfranco@email.it

//inserire un database con le mail registrate
var registredEmail = ["Gianfranco@email.it", "Cinzio@gmail.com", "Clarabella@tim.it"]

//creo var per risultato
var risultato;



//confrontare mail inserita con quelle nel database
for ( var i = 0; i < registredEmail.length; i++) {
 if (insertMail == registredEmail[i]) {
   risultato = "la mail " + insertMail + " è corretta";
 } else {
   risultato = "la mail " + insertMail + " è errata";
 }
}
console.log(risultato);
// if (risultato = 1) {
//   alert("la tua mail inserita è corretta");
// } else if (risultato = 0) {
//   alert("la tua mail è errata");
// }
document.getElementById('asd').innerHTML = risultato;

//stampare risultato

// usa una variabile per RICORDARTI se la email è stta trovata o no.
// quando esci dal ciclo in base al valore d iquella variabile mostri un messaggio
