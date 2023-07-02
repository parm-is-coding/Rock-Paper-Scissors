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
    return lower(result);
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

console.log((rPSRound(getComputerChoice(),getPlayerChoice())));




