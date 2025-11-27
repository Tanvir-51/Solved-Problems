function rockPaperScissorsGame() {
  console.log("Let's get started with the Rock Paper Scissors Game");

  const userPrompt = prompt("Enter Rock, Paper or Scissors")
  let userChoice = userPrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  // if (randomNumber === 1) {
  //   computerChoice = "rock";
  // } else if (randomNumber === 2) {
  //   computerChoice = "paper";
  // } else if (randomNumber === 3) {
  //   computerChoice = 'scissors';
  // }

  switch(randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  console.log("User selected: ", userChoice);
  console.log("Computer selected: ", computerChoice);

  if(
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
      console.log("You Win!!!");
  } else if(userChoice === computerChoice) {
      console.log("It's Draw!!");
  } else if(
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You Lose!!!");
  }
  else{
      console.log("Please check the input again.");
  }

  const playAgainPrompt = prompt("Do you want to play again? (Yes/No)")
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : 'No'

  if(playAgain === "Yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing. See you next time!!");
  }
}

rockPaperScissorsGame();