window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)

    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = Date.now()
    gameFrameCurrent = Date.now() - 16

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Puzzle') {
        loopPuzzle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - targetRect.left) / targetRect.width * canvas.width
    let y = (event.clientY - targetRect.top) / targetRect.height * canvas.height
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Puzzle') {
        mouseUpPuzzle(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Puzzle') {
        keyDownPuzzle(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}
