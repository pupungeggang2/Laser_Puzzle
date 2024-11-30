window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = Date.now()
    gameFrameCurrent = Date.now() - 16

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'LevelSelect') {
        loopLevelSelect()
    } else if (scene === 'Puzzle') {
        loopPuzzle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
}

function keyDown(event) {
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
