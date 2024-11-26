const game = createGame();
do{
    game.playRound();
} while (game.gameboard.checkWon() == false);
console.log(`Player ${game.gameboard.checkWon()} has won!`);

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
                    if(gameboard[currentRow][currentCol] == ' ') {
                        gameboard[currentRow][currentCol] = player;
                        return false;
                    }
                    return true;
                }
            }
        }
    }

    function checkWon() {
        for (let i=0; i < gameboard.length; i++) {
            let firstPlayer = gameboard[i][0];
            if (firstPlayer == ' ') {
                continue;
            }
            for (let j=0; j < gameboard.length; j++) {
                if (gameboard[i][j] != firstPlayer){
                    break;
                }else if (j==2) {
                    return firstPlayer;
                }
            }
        }
        for (i=0; i < gameboard.length; i++) {
            let firstPlayer = gameboard[0][i];
            if (firstPlayer == ' ') {
                continue;
            }
            for (let j=0; j < gameboard.length; j++) {
                if (gameboard[j][i] != firstPlayer) {
                    break;
                }else if (j == 2) {
                    return firstPlayer;
                }
            }
        }
        let firstPlayer = gameboard[0][0]
        for (i=0; i < gameboard.length; i++) {
            if (firstPlayer == ' ') {
                break;
            }
            if(gameboard[i][i] != firstPlayer) {
                break;
            }else if (i == 2) {
                return firstPlayer;
            }
        }
        firstPlayer = gameboard[0][gameboard.length-1]
        for (i=0; i < gameboard.length; i++) {
            if (firstPlayer == ' ') {
                break;
            }
            if(gameboard[i][gameboard.length-1-i] != firstPlayer) {
                break;
            } else if (i == 2) {
                return firstPlayer;
            }
        }
        return false;
    }

    return {gameboard, print, update, checkWon};
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
            let inputRow = null;
            let inputCol = null;
            do {
                inputRow = prompt(`${player} enter your input as row: `);
                inputCol = prompt('and col: ');
            }while(gameboard.update(player, inputRow, inputCol));
            if(gameboard.checkWon() != false) {
                gameboard.print();
                return;
            }
        }
    }
    return {playRound, gameboard};
}
