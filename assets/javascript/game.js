$(document).ready(function()
{

var totalWins = 0;
var totalLosses = 0;
var guessCounter = 9;

var alphabet =
[
"a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"
];

var computerChoice = "";
var userGuess = "";
var userGuessArray = [];
var numSameGuesses = 0;


window.addEventListener("keypress", isGuessCorrect, false);

computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Answer: " + computerChoice);

function isGuessCorrect(key)
{
	userGuess = String.fromCharCode(key.keyCode);
	var ASCIIcode = userGuess.charCodeAt(0);
	if(userGuess === userGuess.toUpperCase())
	{
		userGuess = userGuess.toLowerCase();
	}

	if(ASCIIcode < 65 || (ASCIIcode > 90 && ASCIIcode < 97) || ASCIIcode > 122)
	{
		return;
	}

	console.log(userGuess);
	

	if (userGuess === computerChoice)
	{
		alert("You guessed the correct letter!");
		totalWins++;
		guessCounter = 9;
		userGuessArray = [];
		userGuess = "";
		numSameGuesses = 0;
		document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuessArray;
		document.getElementById("guessesRemain").innerHTML = "Guesses Remaining: " + guessCounter;
		document.getElementById("wins").innerHTML = "Total Wins: " + totalWins;
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Answer: " + computerChoice);
	}

	else if (guessCounter > 1)
	{
		
		if (userGuessArray.indexOf(" " + userGuess) >= 0 && guessCounter !== 9)
		{
			alert("You've already guessed " + userGuess + " for this round. Please choose a new letter.");
			numSameGuesses++;

			if (numSameGuesses > 2)
			{
				alert("Alright wise guy.  Let's focus here.  Try guessing a NEW letter.");
				numSameGuesses = 0;
			}

		}

		else
		{
			guessCounter--;
			userGuessArray.push(" " + userGuess);
			document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuessArray;
			document.getElementById("guessesRemain").innerHTML = "Guesses Remaining: " + guessCounter;
		}
	}
	
	else
	{
		totalLosses++;
		guessCounter = 9;
		userGuessArray = [];
		userGuess = "";
		numSameGuesses = 0;
		document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuessArray;
		document.getElementById("guessesRemain").innerHTML = "Guesses Remaining: " + guessCounter;
		document.getElementById("losses").innerHTML = "Total Losses: " + totalLosses;
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Answer: " + computerChoice);
	}
}



})
