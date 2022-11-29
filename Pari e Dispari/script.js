//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5

const userNum = prompt("inserisci un numero");

// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.

function cpuRandom(maxNum, minNum) {
  let cpuNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

  return cpuNumber;
}

// Sommiamo i due numeri.
let somma = userNum + cpuRandom(5, 1);

//Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione

function isEven(num) {
  if (num % 2 == 0) {
    return "È pari";
  }
  return "È dispari";
}

let numeroPari = isEven(somma);

console.log(numeroPari);
