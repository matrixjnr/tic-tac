import React, { useState } from 'react'
import Board from './Board'
import Score from './Score'
import checkWinner from './../utils/game-rules'

const Game = () => {
    // Default values (game states)
    const defaultBoard = Array(9).fill(null)
    const defaultScore = {
        player1: 0,
        draw: 0,
        player2: 0
    }
    const defaultPlayers = {
        player1: {
            priority: true,
            turn: true,
            symbol: 'X'
        },
        player2: {
            priority: false,
            turn: false,
            symbol: 'O'
        }
    }
    const defaultWinner = null
    const defaultAnimation = 'scale'
    const defaultReset = false

    // Game states
    const [board, setBoard] = useState(defaultBoard)
    const [score, setScore] = useState(defaultScore)
    const [players, setPlayers] = useState(defaultPlayers)
    const [winner, setWinner] = useState(defaultWinner)
    const [animation, setAnimation] = useState(defaultAnimation)
    const [reset, setReset] = useState(defaultReset)

    // Function that updates the board (changes the value of a specific index)
    const updateBoard = (i) => {
        const nextState = board.map((element, index) => {
            if (index === i) {
                return players.player1.turn ? players.player1.symbol : players.player2.symbol
            } else {
                return element
            }
        })
        setBoard(nextState)

        return nextState
    }

    // Function that updates the score (increases the value by 1)
    const updateScore = (winner) => {
        if (winner !== null) {
            if (winner.symbol === 'X') {
                setScore({ ...score, player1: score.player1 + 1 })
            } else {
                setScore({ ...score, player2: score.player2 + 1 })
            }
        } else {
            setScore({ ...score, draw: score.draw + 1 })
        }
    }

    // Function that updates the player's priority (determines who will start the game)
    const updatePriority = () => {
        if (players.player1.priority) {
            setPlayers({
                player1: { ...players.player1, priority: false, turn: false },
                player2: { ...players.player2, priority: true, turn: true }
            })
        } else {
            setPlayers({
                player1: { ...players.player1, priority: true, turn: true },
                player2: { ...players.player2, priority: false, turn: false }
            })
        }
    }

    // Function that updates the player's turn (determines who has the next move)
    const updateTurn = () => {
        if (players.player1.turn) {
            setPlayers({
                player1: { ...players.player1, turn: false },
                player2: { ...players.player2, turn: true }
            })
        } else {
            setPlayers({
                player1: { ...players.player1, turn: true },
                player2: { ...players.player2, turn: false }
            })
        }
    }

    // Function that updates the winner (determines who won the game)
    const updateWinner = (board) => {
        const nextState = checkWinner(board)
        setWinner(nextState)

        return nextState
    }

    // Function that updates the animation displayed after a win or draw
    const updateAnimation = (win) => {
        if (win) {
            setTimeout(() => {
                setAnimation({
                    line: 'blink',
                    notLine: 'fade'
                })
            }, 400)
        } else {
            setTimeout(() => {
                setAnimation('fade')
            }, 400)
        }
    }

    // Function that allows to reset the game after the animation ends
    const updateReset = (win) => {
        if (win) {
            setTimeout(() => {
                setReset(true)
            }, 2600)
        } else {
            setTimeout(() => {
                setReset(true)
            }, 700)
        }
    }

    // Call functions after clicking a cell on the board
    const handleOnClick = (i) => {
        if (winner === null && board[i] === null) {
            // Step 1: Update the board
            const updatedBoard = updateBoard(i)

            // Step 2: Update the winner
            const updatedWinner = updateWinner(updatedBoard)

            // Step 3: Update the player's turn
            updateTurn()

            if (!updatedBoard.includes(null) || updatedWinner !== null) {
                // Step 4: Update the player's priority
                updatePriority()

                // Step 5: Update the score
                updateScore(updatedWinner)

                // Step 6: Update the animation
                updateAnimation(updatedWinner)

                // Step 7: Update the reset value
                updateReset(updatedWinner)
            }
        }

        // Step 8: Reset the game (set default values)
        if (reset) {
            setBoard(defaultBoard)
            setWinner(defaultWinner)
            setAnimation(defaultAnimation)
            setReset(defaultReset)
        }
    }

    return (
        <div className="flexbox-column fullscreen">
            <div style={{justifyContent:"center"}}>
                <h1 style={{margin:"0 auto", width:"max-content", padding:"5rem"}}>
                    TIC TAC
                </h1>
            </div>
            <Board
                animation={animation}
                board={board}
                handleOnClick={handleOnClick}
                winner={winner}
            />
            <Score
                draw={!board.includes(null)}
                players={players}
                score={score}
                win={winner !== null}
            />
        </div>
    )
}

export { Game as default }
