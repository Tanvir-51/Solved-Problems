function rockPaperScissorsGame() {
  console.log("Let's get started with the Rock Paper Scissors Game");

  const userPrompt = prompt("Enter Rock, Paper or Scissors")
  let userChoice = userPrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = 'scissors';
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
  }
}

rockPaperScissorsGame();