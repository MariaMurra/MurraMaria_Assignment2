/*eslint-env browser*/
var coinFlip;
for (coinFlip = Math.round(Math.random()); coinFlip < 10; coinFlip++) {
    if (coinFlip === 1) {
        window.document.write("Heads <br>");
    } else {
        window.document.write("Tails <br>");
    } 
}