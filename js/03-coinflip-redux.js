/*eslint-env browser*/
var coinFlip;
for (coinFlip = 0; coinFlip < 10; coinFlip++) {
    if (coinFlip === 1) {
        window.document.write("Heads <br>");
    } else if (coinFlip === 0) {
        window.document.write("Tails <br>");
    } else {
        window.document.write("try again | ");
    }
}