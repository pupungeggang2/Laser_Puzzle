function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawPuzzleUI() {
    context.drawImage(img.button.up, UI.puzzle.buttonUp[0], UI.puzzle.buttonUp[1])
    context.drawImage(img.button.left, UI.puzzle.buttonLeft[0], UI.puzzle.buttonLeft[1])
    context.drawImage(img.button.down, UI.puzzle.buttonDown[0], UI.puzzle.buttonDown[1])
    context.drawImage(img.button.right, UI.puzzle.buttonRight[0], UI.puzzle.buttonRight[1])

    context.drawImage(img.button.restart, UI.puzzle.buttonRestart[0], UI.puzzle.buttonRestart[1])
    context.drawImage(img.button.undo, UI.puzzle.buttonUndo[0], UI.puzzle.buttonUndo[1])
    context.drawImage(img.button.interact, UI.puzzle.buttonInteract[0], UI.puzzle.buttonInteract[1])
}
