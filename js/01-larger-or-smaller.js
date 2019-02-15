/*eslint-env browser*/
window.document.write("<h1> Larger or smaller? </h1>");
var int1 = window.prompt("Please write a number");
var int2 = window.prompt("Please write a second number");

if (int1 > int2) {
    window.document.write("<h3>" + int1 + " is the larger of the two</h3>");
} else if (int1 < int2) {
    window.document.write("<h3>" + int2 + " is the larger of the two</h3>");
} else {
    window.document.write("<h3> The numbers are equal </h3>");
}