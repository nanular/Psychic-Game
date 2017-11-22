$(document).ready(function()
{

const guessesAllowed = 9;
var computerChoice = "";
var totalWins = 0;
var totalLosses = 0;
var userGuessArray = [];

roundReset();
window.addEventListener("keypress", isGuessCorrect, false);


function fetchRandomLetter()
{
	var randomChar = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
	console.log("Answer: " + String.fromCharCode(randomChar) + " (" + randomChar + ")");
	return randomChar; 
}


function roundReset()
{
	guessesRemaining = guessesAllowed;
	userGuessArray.length = 0;
	document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuessArray;
	document.getElementById("guessesRemain").innerHTML = "Guesses Remaining: " + guessesRemaining;
	document.getElementById("wins").innerHTML = "Total Wins: " + totalWins;
	document.getElementById("losses").innerHTML = "Total Losses: " + totalLosses;
	computerChoice = fetchRandomLetter();
}


function isGuessCorrect(key)
{
	var userGuessKey = key.keyCode;
	var userGuess = String.fromCharCode(key.keyCode);
	userGuess = userGuess.toUpperCase();
	var ASCIIcode = userGuess.charCodeAt(0);

	if (ASCIIcode < 65 || ASCIIcode > 90)
		{ return; }

	console.log(userGuess + ": " + ASCIIcode);

	if (ASCIIcode === computerChoice)
	{
		totalWins++;
		alert("You guessed the correct letter!");
		roundReset();
	}

	else if (userGuessArray.indexOf(" " + userGuess) >= 0 && guessesRemaining !== guessesAllowed)
	{
		alert("You've already guessed " + userGuess + " for this round. Please choose a new letter.");
		return;
	}

	else if (guessesRemaining > 1)
	{
		guessesRemaining--;
		userGuessArray.push(" " + userGuess);
		document.getElementById("guesses").innerHTML = "Letters Guessed: " + userGuessArray;
		document.getElementById("guessesRemain").innerHTML = "Guesses Remaining: " + guessesRemaining;
	}

	else
	{
		alert("I'm sorry.  The letter was " + userGuess + ".  Let's try another round!")
		totalLosses++;
		roundReset();
	}
}

})
