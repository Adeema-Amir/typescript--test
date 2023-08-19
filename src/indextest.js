var userInput = Number(prompt("Enter the number of rows:"));
function printAsterisks(rows) {
    for (var i = 1; i <= rows; i++) {
        var row = '';
        for (var j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}
;
printAsterisks(userInput);
