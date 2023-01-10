test("test that the game board is initially empty", () => {
    const gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    expect(gameBoard).toStrictEqual([[null, null, null], [null, null, null], [null, null, null]]);
});

test("test that a player can only place their piece on an empty space", () => {
    const gameBoard = [
        [null, null, null],
        [null, "X", null],
        [null, null, null]
    ];
    expect(gameBoard).toStrictEqual([[null, null, null], [null, "X", null], [null, null, null]]);
});

test("test that a player can only place one piece per turn", () => {
    const gameBoard = [
        [null, "X", null],
        [null, "X", null],
        [null, null, null]
    ];
    expect(gameBoard).not.toStrictEqual([[null, "X", "X"], [null, "X", null], [null, null, null]]);
});

test("test that a player can't place two pieces in the same spot", () => {
    const gameBoard = [
        [null, "X", null],
        [null, "X", null],
        [null, null, null]
    ];
    expect(gameBoard).not.toStrictEqual([[null, "X", null], [null, "X", "X"], [null, null, null]]);
});

test("test that a player can't make a move after the game has ended", () => {
    const gameBoard = [
        ["X", "X", "X"],
        ["X", "O", "O"],
        ["O", "X", "O"]
    ];
    expect(gameBoard).not.toStrictEqual([["X", "X", "X"], ["X", "O", "O"], ["O", "X", "X"]]);
});

test("test that the game board is updated when a player makes a move", () => {
    const gameBoard = [
        ["X", "X", null],
        ["X", "O", null],
        ["O", "X", null]
    ];
    expect(gameBoard).toStrictEqual([["X", "X", null], ["X", "O", null], ["O", "X", null]]);
});

test("test that a player can not make a move after the game is over", () => {
    const gameBoard = [
        ["X", "X", "X"],
        ["X", "O", "O"],
        ["O", "X", "O"]
    ];
    expect(gameBoard).not.toStrictEqual([["X", "X", "X"], ["X", "O", "O"], ["O", "X", "X"]]);
});

test("test that the game ends when a player has three pieces in a row", () => {
    const gameBoard = [
        ["X", "X", "X"],
        ["X", "O", "O"],
        [null, null, null]
    ];
    expect(gameBoard).toStrictEqual([["X", "X", "X"], ["X", "O", "O"], [null, null, null]]);
});

test("test that the game ends in a tie when all spaces are filled with no player having three in a row", () => {
    const gameBoard = [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"]
    ];
    expect(gameBoard).toStrictEqual([["X", "O", "X"], ["X", "O", "X"], ["O", "X", "O"]]);
});

test("test that a player cannot place a piece off the board", () => {
    const gameBoard = [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"]
    ];
    expect(gameBoard).not.toStrictEqual([["X", "O", "X"], ["X", "O", "X"], ["O", "X", "X", "X"]]);
});