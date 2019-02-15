/*eslint-env browser*/
var coinFlip;
for (var i = 0; i <= 10; i += 1) {
    coinFlip =Math.round(Math.random());
    if (coinFlip === 1) {
        window.document.write("Heads <br>");
    } else {
        window.document.write("Tails <br>");
    }
}