function createGameboard() {
    const gameboard = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

    function print() {
        let string = '';
        for (row of gameboard) {
            string = string + `[${row[0]}] [${row[1]}] [${row[2]}] \n`
        }
        console.log(string);
    }

    function update(player, updateRow, updateCol) {
        for (let currentRow = 0; currentRow < gameboard.length; currentRow++) {
            for (let currentCol = 0; currentCol  < gameboard[currentRow].length; currentCol++) {
                if (currentRow == updateRow && currentCol == updateCol) {
                    if(gameboard[currentRow] == ' ' && gameboard[currentCol] == ' ') {
                        gameboard[currentRow][currentCol] = player;
                        return;
                    }
                    return;
                }
            }
        }
    }

    return {gameboard, print, update};
}

function createPlayers() {
    const players = ['x','o'];
    return {players};
}

function createGame() {
    const gameboard = createGameboard();
    const players = createPlayers().players;
    function playRound() {
        console.log('======= NEW ROUND ======');
        for (player of players) {
            gameboard.print();
            console.log(`Player ${player}:`)
            let inputRow = prompt(`${player} enter your input as row: `);
            let inputCol = prompt('and col: ');
            gameboard.update(player, inputRow, inputCol);
        }
    }
    return {playRound};
}

const game = createGame();