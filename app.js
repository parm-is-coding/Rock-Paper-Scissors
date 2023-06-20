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
    prompt("")
}
console.log(getComputerChoice());


