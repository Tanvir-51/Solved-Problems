// function secretNumber() {
//   console.log("welcome to the number guessing game!");

//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   let userGuess = 0;
//   let userAttempt = 0;

//   while( userGuess !== randomNumber) {
//     const userPrompt = prompt("Try to guess a number between 1 and 10");
//     userGuess = parseInt(userPrompt);

//     userAttempt++;

//     if (userGuess === randomNumber) {
//       console.log("Congratulations!! You've guessed right!!!");
//       console.log(`You have taken ${userAttempt} attempts`);
//       break;
//     } else if(userGuess > randomNumber) {
//         console.log("Too High! Guess again...");
//     } else if (userGuess < randomNumber) {
//         console.log("Too Low! Guess again...");
//     }
//   }
  


//   const playAgainPrompt = prompt("Do you want to play again? (yes/no)")
//   const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no"

//   if(playAgain === "yes") {
//     secretNumber();
//   } else {
//       console.log("Thanks for playing. See you next time!");
//   }
    
// }

// secretNumber()



const MIN_NUMBER = 1;
const MAX_NUMBER = 10;


function secretNumberGame() {
  console.log("Secret Number Guessing Game");
  console.log("Enter a number between 1 and 10");

  const randomNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
  let guess = null;
  let count = 0;

  while(guess !== randomNumber) {
    const userPrompt = prompt("Enter a number");
    guess = parseInt(userPrompt);

    count++;

    if (guess > randomNumber) {
      console.log("Too High! Guess again...");
    } else if (guess < randomNumber) {
      console.log("Too Low! Guess again...");
    } else if (guess === randomNumber) {
      console.log(`It's a match!! You've succeeded in ${count} attempt`);
      break;
    } else {
      console.log(`Invalid input! Please Enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`);
    }
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)")
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : 'no';

  if(playAgain === "yes") {
    secretNumberGame();
  } else {
    console.log("Thanks for playing. See you next time...");
  }
}

secretNumberGame();












