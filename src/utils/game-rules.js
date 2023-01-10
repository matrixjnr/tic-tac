// Winning combinations

// Horizontal
// [0, 1, 2] - [3, 4, 5] - [6, 7, 8]

// Vertical
// [0, 3, 6] - [1, 4, 7] - [2, 5, 8]

// Diagonal
// [0, 4, 8] - [2, 4, 6]

// Determine if someone has won the game or it's a draw

const checkWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [x, y, z] = lines[i]

        if (board[x] && board[x] === board[y] && board[x] === board[z]) {
            return {
                line: [x, y, z],
                symbol: board[x]
            }
        }
    }

    return null
}

export { checkWinner as default }
