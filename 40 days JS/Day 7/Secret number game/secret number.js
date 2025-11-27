function secretNumber() {
  console.log("welcome to the number guessing game!");

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = 0;
  let userAttempt = 0;

  while( userGuess !== randomNumber) {
    const userPrompt = prompt("Try to guess a number between 1 and 10");
    userGuess = parseInt(userPrompt);

    userAttempt++;

    if (userGuess === randomNumber) {
      console.log("Congratulations!! You've guessed right!!!");
      console.log(`You have taken ${userAttempt} attempts`);
      break;
    } else if(userGuess > randomNumber) {
        console.log("Too High! Guess again...");
    } else if (userGuess < randomNumber) {
        console.log("Too Low! Guess again...");
    }
  }
  


  const playAgainPrompt = prompt("Do you want to play again? (yes/no)")
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no"

  if(playAgain === "yes") {
    secretNumber();
  } else {
      console.log("Thanks for playing. See you next time!");
  }
    
}

secretNumber()