
/*1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato; */

//far inserire e-mail
var insertMail = prompt("prego inserisci la tua mail");

// mettiamo Gianfranco@email.it

//inserire un database con le mail registrate
var registredEmail = ["Gianfranco@email.it", "Cinzio@gmail.com", "Clarabella@tim.it"]

//creo var per risultato
var risultato;


console.log(risultato);
//confrontare mail inserita con quelle nel database
for ( var i = 0; i < registredEmail.length; i++) {
 if (insertMail == registredEmail[i]) {
   risultato = 1;
 } else {
   risultato = 0;
 }
}
if (risultato = 1) {
  alert("la tua mail inserita è corretta");
} else if (risultato = 0) {
  alert("la tua mail è errata");
}

//stampare risultato

// usa una variabile per RICORDARTI se la email è stta trovata o no.
// quando esci dal ciclo in base al valore d iquella variabile mostri un messaggio
