//randomly return Rock Paper or Scissors
function getComputerChoice(){
    let rndNum = Math.floor(Math.random()*3);
    switch(rndNum){
        case 0:
            return "Rock";
        break;
        case 1:
            return "Paper";
        break;
        case 2:
            return "Scissors";
        break;
    }

}
function getPlayerChoice(){
    return prompt("Enter Rock Paper or Scissors");
}
function rPSRound(computerChoice,playerChoice){
if(computerChoice === playerChoice){
    return "Tie no winner";
}else if(playerChoice == "Rock" &&
         computerChoice == "Paper" ||
         playerChoice == "Scissors" &&
         computerChoice == "Rock" ||
         playerChoice == "Paper" && 
         computerChoice == "Rock"
            ){
                return `You Lose Computer chose ${computerChoice} and you chose ${playerChoice}`;
            }else{
                return `You Win! Computer chose ${computerChoice} and you chose ${playerChoice}`;
            }
}

console.log((rPSRound(getComputerChoice(),getPlayerChoice())));




