let userInput:number = Number(prompt("Enter the number of rows:"));

function printAsterisks(rows:number){
    for(let i=1; i<=rows; i++){
        let row = '';
        for(let j=0; j<i; j++){
            row += '*';
        }
        console.log(row);
    }
};

printAsterisks(userInput);