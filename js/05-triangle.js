/*eslint-env browser*/
/*for (var i = 1; i < 7; i++) {
    i = i++;
    window.document.write( i + "<br>");
}*/
var i;
var j;
for (i = 1; i <= 8; i++) {
   
    for (j = 1; j < i; j++) {
        window.document.write("#");
    }
    window.document.write("<br>");
}