/*eslint-env browser*/
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Choose: Heads or Tails?");

if (coinFlip === 0) {
    coinFlip = "heads";
    if (coinFlip === choice) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (coinFlip !== choice) {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
    
} else if (coinFlip === 1) {
    coinFlip = "tails";
    if (coinFlip === choice) {
        window.alert("The flip was Tails and you chose Tails...you win!");
    } else if (coinFlip !== choice) {
        window.alert("The flip was Tails but you chose Heads...you lose!");
    }
}

