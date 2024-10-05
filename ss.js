let ticTacToeCanvas = document.getElementById("ticTacToeCanvas");
let ticTacToeCtx = ticTacToeCanvas.getContext("2d");
let board = Array(9).fill(null);
let currentPlayer = 'X';

function startTicTacToe() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    drawBoard();
    ticTacToeCanvas.addEventListener('click', handleTicTacToeClick);
}

function drawBoard() {
    clearCanvas(ticTacToeCtx);
    ticTacToeCtx.lineWidth = 2;
    ticTacToeCtx.strokeStyle = "#ff9800";
    
    for (let i = 1; i < 3; i++) {
        ticTacToeCtx.beginPath();
        ticTacToeCtx.moveTo(i * 100, 0);
        ticTacToeCtx.lineTo(i * 100, 300);
        ticTacToeCtx.stroke();
        ticTacToeCtx.moveTo(0, i * 100);
        ticTacToeCtx.lineTo(300, i * 100);
        ticTacToeCtx.stroke();
    }
}

function handleTicTacToeClick(event) {
    const rect = ticTacToeCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / 100);
    const row = Math.floor(y / 100);
    const index = row * 3 + col;
    
    if (!board[index]) {
        board[index] = currentPlayer;
        drawMove(col, row, currentPlayer);
        if (checkWinner()) {
            alert(currentPlayer + ' Wins!');
            startTicTacToe();
        } else if (board.every(cell => cell)) {
            alert('It\'s a Tie!');
            startTicTacToe();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
