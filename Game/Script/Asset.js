let img = {
    play: new Image(),
    del: new Image(),
    selectFrame: new Image(),

    button: {
        up: new Image(),
        left: new Image(),
        down: new Image(),
        right: new Image()
    },
}

function imageLoad() {
    img.play.src = 'Image/Play.png'
    img.del.src = 'Image/Delete.png'
    img.selectFrame.src = 'Image/SelectFrame.png'

    img.button.up.src = 'Image/Button/ButtonUp.png'
    img.button.left.src = 'Image/Button/ButtonLeft.png'
    img.button.down.src = 'Image/Button/ButtonDown.png'
    img.button.right.src = 'Image/Button/ButtonRight.png'
}
