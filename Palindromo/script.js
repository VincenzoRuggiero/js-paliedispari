function checkPalindrome(word) {
  // salva la lunghezza della parola in una variabile
  const wordLength = word.length;

  // Cicla metà della parola/argomento nella funzione
  for (let i = 0; i < wordLength / 2; i++) {
    // controlla che gli estremi della parola NON siano uguali
    if (word[i] !== word[wordLength - 1 - i]) {
      return "Non è una parola palindroma";
    }
  }
  return "È una parola palindroma";
}

// Chiede la parola all'utente
const askWord = prompt("Scrivi una parola: ");

// Invoca la funzione
const userWord = checkPalindrome(askWord);

console.log(userWord);
