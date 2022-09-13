// Pseudo-coding

// define age variable
// define name variable

// if the age is greater than or equal to 17 (if block condition)
    // admit them to the movie (pass condition)
//else (else condition)
    // deny them entry

// define array to hold choices [r, p, s]
// define var for computerChoice
// define var for humanChoice
// define var for wins
// define var for losses
// define var for ties

// prompt humanChoice (use prompt as a function)

// randomly choose computerChoice (use .random)

// compare choices
   // if humanChoice is p and computer choice is r
//humanChoice wins

// display (alert) comparison results (won, tied, lost round)

// show stats (number of wins, losses, ties)


// play again?
    // restart game (if yes)
// else
    // end game (cancel)

//show stats 
//confirm for boolean

var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();



