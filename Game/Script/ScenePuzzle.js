function loopPuzzle() {
    displayPuzzle()

    if (menu === false) {
        if (state === '' || state === 'Win') {
            puzzleTick()
        }
    }
}

function displayPuzzle() {
    drawSceneInit()

    context.strokeRect(UI.puzzle.buttonMenu[0], UI.puzzle.buttonMenu[1], UI.puzzle.buttonMenu[2], UI.puzzle.buttonMenu[3])
    context.strokeRect(UI.puzzle.board[0], UI.puzzle.board[1], UI.puzzle.board[2], UI.puzzle.board[3])

    board.render()
    drawPuzzleUI()

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpPuzzle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.puzzle.buttonMenu)) {
                menu = true
                cursor.menu = -1
            }
            if (state === '') {
                if (inputBlock === false) {
                    if (pointInsideRectArray(x, y, UI.puzzle.buttonUp)) {
                        board.movePlayer('Up')
                        inputBlock = true
                        inputBlockTime = 0.4
                    } else if (pointInsideRectArray(x, y, UI.puzzle.buttonLeft)) {
                        board.movePlayer('Left')
                        inputBlock = true
                        inputBlockTime = 0.4
                    } else if (pointInsideRectArray(x, y, UI.puzzle.buttonDown)) {
                        board.movePlayer('Down')
                        inputBlock = true
                        inputBlockTime = 0.4
                    } else if (pointInsideRectArray(x, y, UI.puzzle.buttonRight)) {
                        board.movePlayer('Right')
                        inputBlock = true
                        inputBlockTime = 0.4
                    }
                }
            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonBack)) {
                place = 'Hub'
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonHome)) {
                scene = 'Title'
                state = ''
                cursor.title = -1
                menu = false
            }
        }
    }
}

function keyDownPuzzle(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
            cursor.menu = -1
        }
        if (state === '') {
            if (inputBlock === false) {
                if (key === 'ArrowUp' || key === 'w') {
                    board.movePlayer('Up')
                    inputBlock = true
                    inputBlockTime = 0.25
                } else if (key === 'ArrowLeft' || key === 'a') {
                    board.movePlayer('Left')
                    inputBlock = true
                    inputBlockTime = 0.25
                } else if (key === 'ArrowDown' || key === 's') {
                    board.movePlayer('Down')
                    inputBlock = true
                    inputBlockTime = 0.25
                } else if (key === 'ArrowRight' || key === 'd') {
                    board.movePlayer('Right')
                    inputBlock = true
                    inputBlockTime = 0.25
                }
            }
        }
    } else if (menu === true) {
        if (cursor.menu === -1) {
            cursor.menu = 0
        } else {
            if (key === 'ArrowLeft') {
                cursor.menu = (cursor.menu + 2) % 3
            } else if (key === 'ArrowRight') {
                cursor.menu = (cursor.menu + 1) % 3
            } else if (key === 'Enter') {
                if (cursor.menu === 0) {
                    menu = false
                } else if (cursor.menu === 1) {
                    place = 'Hub'
                    menu = false
                } else if (cursor.menu === 2) {
                    scene = 'Title'
                    state = ''
                    cursor.title = -1
                    menu = false
                }
            }
        }
    }
}
