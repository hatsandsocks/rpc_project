




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
    if (randomNumber === 1) {alert("rock");}
    else if (randomNumber === 2) {alert("paper");}
    else {alert("scissors");}
}