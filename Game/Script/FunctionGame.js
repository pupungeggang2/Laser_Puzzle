function puzzleInit() {
    place = 'Hub'
    board = new Board(dataLevel[place])
}

function puzzleTick() {
    board.tick()

    if (inputBlock === true) {
        if (inputBlockTime < 0) {
            inputBlock = false
        } else {
            inputBlockTime -= delta / 1000
        }
    }
}
