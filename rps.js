function getComputerChoice(){
	const choiceNum = Math.floor(Math.random()*3);
	const choice = (choiceNum == 0) ? "rock" :
		(choiceNum == 1) ? "scissors" : "paper";
	console.log(`Computer Choice: ${choice} from ${choiceNum}`);
	return choice;
}

function getPlayerChoice(){
	const choice = prompt("Choose your decision:\nrock, paper, scissors");
	return choice.toLowerCase();
}

function rpsRound(){
	const playerChoice = getPlayerChoice();
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
function determineWinner(playerChoice, computerChoice){
	if(playerChoice == "rock"){
		if(computerChoice == "rock") return 0;
		if(computerChoice == "scissors") return 1;
		if(computerChoice == "paper") return -1;
	}
	if(playerChoice == "paper"){
		if(computerChoice == "paper") return 0;
		if(computerChoice == "rock") return 1;
		if(computerChoice == "scissors") return -1;
	}
	if(playerChoice == "scissors"){
		if(computerChoice == "scissors") return 0;
		if(computerChoice == "paper") return 1;
		if(computerChoice == "rock") return -1;
	}
}

function updateGameLog(result){
	if(result > 0) gameLog.player += 1;
	else if(result < 0) gameLog.computer += 1;
	else if(result === 0) gameLog.tie += 1;
	else gameLog.error += 1;
}

function displayWinner(result) {
	if(result > 0) {
		alert('Congratulations! You won!');
	}
	else if(result < 0) {
		alert('Computer won, better luck next time!');
	}
	else if(result === 0) {
		alert('Tie!');
	}
	else {
		alert('There was an error this game - check that your input matches rock, paper, or scissors!');
	}
}

function displayGameLog(){
	let log = `Total Results:\nPlayer: ${gameLog.player}\nComputer: ${gameLog.computer}\nTie: ${gameLog.tie}`;
	if(gameLog.error !== 0) log = log + `\nError: ${gameLog.error}`;
	alert(log);
}

function game(){
	for(let i = 0; i < 5; ++i){
		const result = rpsRound();
		displayWinner(result);
		displayGameLog();
	}
}

const gameLog = {
	player: 0,
	computer: 0,
	tie: 0,
	error: 0
}

game();