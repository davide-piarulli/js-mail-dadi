
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
