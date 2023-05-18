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
	const winner = determineWinner(playerChoice, computerChoice);
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