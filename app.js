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
    while(true){
        let result = prompt("Enter Rock Paper or Scissors");
        if(result == null){
            continue;
        }
        result = result.toLowerCase();
        if(result == "rock" || 
           result == "paper"||
           result == "scissors"){
            return result;
           }
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



function game(){
    let playerWins = 0;
    let compWins = 0;
    for(let i = 0; i < 1; i++){
        let result = rPSRound(getComputerChoice(),getPlayerChoice()).substring(0,8);
        if(result == "You Lose"){
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

const container = document.querySelector("#container");
const output = document.createElement("p");
container.appendChild(output);
const rock = document.querySelector("#rock");
rock.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"rock");
})
const paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"rock");
})
const scissors = document.querySelector("#scissors")
scissors.addEventListener("click",() => {
    output.textContent = rPSRound(getComputerChoice(),"rock");
})

