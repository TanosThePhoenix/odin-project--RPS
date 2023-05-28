function getComputerChoice() {
	const choiceNum = Math.floor(Math.random() * 3);
	const choice = (choiceNum == 0) ? "rock" :
		(choiceNum == 1) ? "scissors" : "paper";
	console.log(`Computer Choice: ${choice} from ${choiceNum}`);
	return choice;
}

function getPlayerChoice(target) {
	const choice = target.id;
	return choice.toLowerCase();
}

function rpsRound(target) {
	const playerChoice = getPlayerChoice(target);
	const computerChoice = getComputerChoice();
	console.log(`Player choice: ${playerChoice} ; Computer choice: ${computerChoice}`);
	const winner = determineWinner(playerChoice, computerChoice);
	updateGameLog(winner);
	console.log(`Winner Result: ${winner}`);
	return winner;
}

//Player wins for positive return (1)
//Computer for negative return (-1)
//0 for tie
//undefined for error
function determineWinner(playerChoice, computerChoice) {
	if (playerChoice == "rock") {
		if (computerChoice == "rock") return 0;
		if (computerChoice == "scissors") return 1;
		if (computerChoice == "paper") return -1;
	}
	if (playerChoice == "paper") {
		if (computerChoice == "paper") return 0;
		if (computerChoice == "rock") return 1;
		if (computerChoice == "scissors") return -1;
	}
	if (playerChoice == "scissors") {
		if (computerChoice == "scissors") return 0;
		if (computerChoice == "paper") return 1;
		if (computerChoice == "rock") return -1;
	}
}

function updateGameLog(result) {
	if (result > 0) gameLog.player += 1;
	else if (result < 0) gameLog.computer += 1;
	else if (result === 0) gameLog.tie += 1;
	else gameLog.error += 1;
}

function displayWinner(result) {
	let resultMessage;
	if (result > 0) {
		resultMessage = 'Congratulations! You won!';
	}
	else if (result < 0) {
		resultMessage = 'Computer won, better luck next time!';
	}
	else if (result === 0) {
		resultMessage = 'Tie!';
	}
	else {
		resultMessage = 'There was an error this game - check that your input matches rock, paper, or scissors!';
	}
	resultP.textContent = resultMessage;
}

function displayGameLog() {
	let log = `Total Results:\nPlayer: ${gameLog.player}\nComputer: ${gameLog.computer}\nTie: ${gameLog.tie}`;
	if (gameLog.error !== 0) log = log + `\nError: ${gameLog.error}`;
	score.textContent = log;
}

function game(e) {
	const target = e.target;
	e.stopPropagation();
	const result = rpsRound(target);
	displayWinner(result);
	displayGameLog();
}

const gameLog = {
	player: 0,
	computer: 0,
	tie: 0,
	error: 0
}

const rpsButtons = document.querySelectorAll('div.buttons .choice-button');
const resultP = document.getElementById('result');
const scoreP = document.getElementById('score');

rpsButtons.forEach(button => button.addEventListener('click', game));