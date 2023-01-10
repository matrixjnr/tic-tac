# Tic-Tac

Tic-Tac is a classic two-player game in which players take turns marking the spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

## How to play

The game is played on a 3x3 grid. Player 1 is marked with an `X` and Player 2 is marked with an `O`. The first player to get three of their marks in a row (horizontal, vertical, or diagonal) is the winner.

## Thought Process

When solving this problem, my first thought was to create a simple game loop that allows players to take turns making moves on the game board. I accomplished this by using a while loop and a simple turn-taking mechanism using a turn variable that alternates between players.

To keep track of the game state, I used a 2D array that represents the game board, where each element in the array corresponds to a cell on the board. I used 1 and -1 to represent the first and second player respectively, and 0 to represent an empty cell.

I then added a function to check for a win condition, which loops through the board array, checking for any row, column, or diagonal that has the same symbol for the current player. If a win condition is met, the game loop breaks, and a message is displayed to the user indicating the winner.

## Tools
The game was built using the following tools:

(i) JavaScript: for implementing the game logic
(ii) Node.js: for running the development server
(iii) React: for building the user interface
(iv) Jest: for testing the game logic

## Running the Project
## Usage
To run the project, you will need to have Node.js and npm (the package manager for Node.js) installed on your machine. Once you have Node.js and npm set up, you can follow these steps to run the project:

(i) Clone the repository to your local machine using git clone [https://github.com/matrixjnr/tic-tac.git](https://github.com/matrixjnr/tic-tac.git)
(ii) Navigate to the root directory of the project using your terminal
(iii) Install the required dependencies by running `npm install`
(iv) Build the project using `npm run build`
(v) Start the server using `npm run start`
The game should now be running on [http://localhost:3000/](http://localhost:3000/)

## Testing

To run the tests, run `npm test`.