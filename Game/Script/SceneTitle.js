function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])

    if (cursor.title === 0) {
        context.fillRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    } else if (cursor.title === 1) {
        context.fillRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    }
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStart)) {
                    scene = 'Puzzle'
                    state = ''
                    puzzleInit()
                }
            }
        }
    }
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (cursor.title === -1) {
                cursor.title = 0
            } else {
                if (key === 'ArrowRight' || key === 'd') {
                    cursor.title = (cursor.title + 1) % 2
                } else if (key === 'ArrowLeft' || key === 'a') {
                    cursor.title = (cursor.title + 1) % 2
                } else if (key === 'Enter') {
                    if (cursor.title === 0) {
                        scene = 'Puzzle'
                        state = ''
                        puzzleInit()
                    }
                }
            }
        }
    }
}
