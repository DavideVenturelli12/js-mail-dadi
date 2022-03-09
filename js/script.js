/* Consegne
1) EMAIL:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

2) GIOCO DEI DADI:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//debug 
console.log('JS OK!')

//1) EMAIL:

/*const emailUtente = prompt("inserisci la tua email");
console.log(emailUtente);

let listaEmail = ["pippo@gmail.com", "topolino@gmail.com", "pluto@gmail.com"];

console.log('email consentite:  ' + listaEmail);

let checkEmail = 0;

for (let i = 0; i < listaEmail.length; i++) {
    if (emailUtente === listaEmail[i]) {
        alert("Login effettuato!")
        console.log("l'email inserita è nella lista");
    }
}

if (!checkEmail) {
    console.log("Mi dispiace, non sei registrato");
}*/

//1) GIOCO DEI DADI:
document.querySelector('.btn').addEventListener('click', function () {
    const numeroUtente = Math.floor(Math.random() * 6) + 1;
    console.log("numero utente: " + numeroUtente)
})



const numeroCpu = Math.floor(Math.random() * 6) + 1;

console.log("numero utente: " + numeroCpu)

