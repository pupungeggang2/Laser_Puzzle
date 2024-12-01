class Board {
    start = [0, 0]
    goal = [0, 0]
    size = [0, 0]
    floor = []
    thing = []
    thingRender = []

    constructor(data) {
        this.floor = []
        this.size = [data['Size'][0], data['Size'][1]]
        for (let i = 0; i < data['Size'][0]; i++) {
            let temp = []
            for (let j = 0; j < data['Size'][1]; j++) {
                 temp.push(new Empty())
            }
            this.floor.push(temp)
        }

        for (let i = 0; i < data['Wall'].length; i++) {
            this.floor[data['Wall'][i][0]][data['Wall'][i][1]] = new Wall()
        }
    }

    render() {
        let boardLeft = 640 - 32 * this.size[1]
        let boardTop = 360 - 32 * this.size[0]

        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                context.strokeRect(boardLeft + UI.puzzle.cellSize[0] * j, boardTop + UI.puzzle.cellSize[1] * i, UI.puzzle.cellSize[0], UI.puzzle.cellSize[1])
            }
        }
    }
}

class CellElement {
    solid = false
    pushable = false
    type = ''
}

class Empty extends CellElement {
    constructor() {
        super()
        this.solid = false
        this.pushable = false
        this.type = 'Empty'
    }
}

class Wall extends CellElement {
    constructor() {
        super()
        this.solid = true
        this.pushable = false
        this.type = 'Wall'
    }
}

