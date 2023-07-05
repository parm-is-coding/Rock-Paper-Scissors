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


// add counter incrementation after playing game

// Dom Elements
const container = document.querySelector("#container");
const output = document.createElement("p");
container.appendChild(output);
const rock = document.querySelector("#rock");
const compScore = document.querySelector("#compScore");
const playerScore = document.querySelector("#playerScore");
// Event Listeners
rock.addEventListener("click",() => {
    
    let result= rPSRound(getComputerChoice(),"rock");
    if(result.substring(0,8) == "You Lose"){
        compScore.textContent = Number(compScore.textContent) + 1;
    }else if (result.substring(0,7) == "You Win") {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    output.textContent = result;
    

})
const paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"paper");
})
const scissors = document.querySelector("#scissors")
scissors.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"scissors");
})

