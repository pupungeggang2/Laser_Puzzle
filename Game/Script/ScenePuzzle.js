function loopPuzzle() {
    displayPuzzle()
}

function displayPuzzle() {
    drawSceneInit()

    context.strokeRect(UI.puzzle.buttonBack[0], UI.puzzle.buttonBack[1], UI.puzzle.buttonBack[2], UI.puzzle.buttonBack[3])

    context.strokeRect(UI.puzzle.board[0], UI.puzzle.board[1], UI.puzzle.board[2], UI.puzzle.board[3])

    drawPuzzleUI() 
}

function mouseUpPuzzle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.levelSelect.buttonBack)) {
                menu = true
            }
            if (state === '') {
            }
        }
    }
}

function keyDownPuzzle(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
        }
    }
}
