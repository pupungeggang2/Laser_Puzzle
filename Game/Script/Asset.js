let img = {
    play: new Image(),
    erase: new Image(),
    selectFrame: new Image(),
    selectFrameSmall: new Image(),
    resume: new Image(),
    back: new Image(),
    home: new Image(),

    button: {
        up: new Image(),
        left: new Image(),
        down: new Image(),
        right: new Image(),

        restart: new Image(),
        undo: new Image(),
        interact: new Image(),
    },

    thing: {
        wall: new Image(),
        box: new Image(),
        goal: new Image(),
    }
}

function imageLoad() {
    img.play.src = 'Image/Play.png'
    img.erase.src = 'Image/Erase.png'
    img.selectFrame.src = 'Image/SelectFrame.png'
    img.selectFrameSmall.src = 'Image/SelectFrameSmall.png'
    img.resume.src = 'Image/Resume.png'
    img.back.src = 'Image/Back.png'
    img.home.src = 'Image/Home.png'

    img.button.up.src = 'Image/Button/ButtonUp.png'
    img.button.left.src = 'Image/Button/ButtonLeft.png'
    img.button.down.src = 'Image/Button/ButtonDown.png'
    img.button.right.src = 'Image/Button/ButtonRight.png'

    img.button.restart.src = 'Image/Button/ButtonRestart.png'
    img.button.undo.src = 'Image/Button/ButtonUndo.png'
    img.button.interact.src = 'Image/Button/ButtonInteract.png'

    img.thing.wall.src = 'Image/Thing/Wall.png'
    img.thing.box.src = 'Image/Thing/Box.png'
    img.thing.goal.src = 'Image/Thing/Goal.png'
}
