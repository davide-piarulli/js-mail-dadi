
// MAIL
let mail = prompt('Scrivi il tuo indirizzo mail');

const listaMail = ['pippo@pippo.it', 'mario@rossi.it', 'davide@piarulli.it'];

let verifica = false;

for (let i = 0; i < listaMail.length; i++) {
  if(mail == listaMail[i]){
    verifica = true;
  }
}

if(verifica){
  document.getElementById('mailUtente').innerHTML = 'La tua mail è presente in lista';
} document.getElementById('mailUtente').innerHTML = 'Mi dispiace, non sei presente in lista';



// DADI


document.getElementById('dpbtn').addEventListener("click", function () {
  const numRandomUtente = Math.ceil(Math.random() * 6);
  const numRandomPc = Math.ceil(Math.random() * 6);


  if (numRandomPc < numRandomUtente) {
    document.getElementById('output').innerHTML = 'utente vince ';
  } else if (numRandomPc > numRandomUtente) {
    document.getElementById('output').innerHTML = 'il PC vince';
  } else {
    document.getElementById('output').innerHTML = 'Questo è un pareggio';
  }
});