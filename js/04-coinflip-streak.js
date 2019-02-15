/*eslint-env browser*/
var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    
    if (coinFlip === 0) {
        window.document.write("Heads");
    } else {
        window.document.write("Tails");
    }
} while (coinFlip === "Tails");
window.document.write(" <br> Tails ends the game");
