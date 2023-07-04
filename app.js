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




// Dom Elements
const container = document.querySelector("#container");
const output = document.createElement("p");
container.appendChild(output);
const rock = document.querySelector("#rock");
// Event Listeners
rock.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"rock");

})
const paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"paper");
})
const scissors = document.querySelector("#scissors")
scissors.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"scissors");
})

