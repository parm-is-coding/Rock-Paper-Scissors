//randomly return Rock Paper or Scissors
function getComputerChoice(){
    let rndNum = Math.floor(Math.random()*3);
    switch(rndNum){
        case 0:
            return "rock";
        break;
        case 1:
            return "paper";
        break;
        case 2:
            return "scissors";
        break;
    }

}
function getPlayerChoice(){
    let result = prompt("Enter Rock Paper or Scissors");
    return result.toLowerCase();
}
function rPSRound(computerChoice,playerChoice){
if(computerChoice === playerChoice){
    return "Tie no winner";
}else if(playerChoice == "rock" &&
         computerChoice == "paper" ||
         playerChoice == "scissors" &&
         computerChoice == "rock" ||
         playerChoice == "paper" && 
         computerChoice == "rock"
            ){
                return `You Lose  ${computerChoice} beats ${playerChoice}`;
            }else{
                return `You Win!  ${playerChoice} beats ${computerChoice}`;
            }
}



function game(){
    playerWins = 0;
    compWins = 0;
    for( i = 0; i < 5; i++){
        result = rPSRound(getComputerChoice(),getPlayerChoice());
        if(result.substring(0,7) == "You Lose"){
            compWins++;
        }else{
            playerWins++;
        }
    }
    if(playerWins > compWins){
        console.log(`You Win ${playerWins} times`);
    }else {
        console.log(`You Lose ${compWins}`);
    }
}

console.log(game());

