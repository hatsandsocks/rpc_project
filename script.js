


function choice() {var n = prompt("Rock, Paper, Scissors?")};

function rockFunction() {
    alert("rock");
}
function paperFunction() {
    alert("paper");
}
function scissorsFunction() {
    alert("scissors");
}


function computerPlay() {
    var randomNumber = Math.floor((Math.random()*3)+1);
    if (randomNumber === 1) {return "rock";}
    else if (randomNumber === 2) {return "paper";}
    else return "scissors"
}

function playGame() {
    }