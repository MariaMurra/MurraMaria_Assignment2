/*eslint-env browser*/
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Choose: heads or tails?");

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
        window.alert("The flip was tails and you chose tails...you win!");
    } else if (coinFlip !== choice) {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
}

