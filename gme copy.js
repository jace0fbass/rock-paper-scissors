// Pseudo-coding

// define age variable
// define name variable

// if the age is greater than or equal to 17 (if block condition)
// admit them to the movie (pass condition)
//else (else condition)
// deny them entry

// define array to hold choices [r, p, s]
var choices = [r, p, s]
// define var for wins
var wins = 0;
// define var for losses
var losses = 0;
// define var for ties
var ties =  0;
// define var for loop
var keepPlaying = true;

while (keep playing) {
}
// prompt humanChoice (use prompt as a function)
var humanChoice = prompt("Choose r, p, s");
console.log('human choice',humanChoice);

// randomly choose computerChoice (use .random)
var random = math.floor(math.random() * choices.length)
var computerChoice = choices[random]
console.log('computer choice', computerChoice)

var result
// compare choices
if (humanChoice === computerChoice) {
  // increse ties by 1
  ties++
  result = "tied!"
}
else if (
  // ( human chose r and the computer chose s )
  humanChoice === "r" && computerChoice === "s" ||
  // ( human chose p and the computer chose r )
  humanChoice === "p" && computerChoice === "r" ||
  // (human chose s and the computer chose p )
  humanChoice === "s" && computerChoice === "p" ||
) {
  //increse wins by 1
  wins++
  result = "win!"
}
else {
  // increse losses by 1
  losses++
  result = "lost!"
}

// display (alert) comparison results (won, tied, lost round)
alert ("You " + result)
// show stats (number of wins, losses, ties)
alert("Stats:nWins: " + wins + "/nLosses: " + losses + "/nTies " +ties)

// play again?
keepPlaying = confirm("Want to play again?")
// restart game (if yes)
  // end game (cancel)




