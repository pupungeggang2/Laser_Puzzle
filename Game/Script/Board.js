class Board {
    start = [0, 0]
    goal = [0, 0]
    goalRenderPosition = [0, 0]
    
    size = [0, 0]
    boardLeft = 0
    boardTop = 0

    cell = []
    thingRender = []

    playerPosition = [0, 0]
    playerRenderPosition = [0, 0]

    constructor(data) {
        this.floor = []
        this.thingRender = []

        this.size = [data['Size'][0], data['Size'][1]]

        this.boardLeft = 640 - 32 * this.size[1]
        this.boardTop = 360 - 32 * this.size[0]

        for (let i = 0; i < data['Size'][0]; i++) {
            let temp = []
            for (let j = 0; j < data['Size'][1]; j++) {
                 temp.push(new Empty())
            }
            this.cell.push(temp)
        }

        let id = 1
        for (let i = 0; i < data['Wall'].length; i++) {
            this.cell[data['Wall'][i][0]][data['Wall'][i][1]] = new Wall(id)
            this.thingRender.push(new RenderWall(new Vector(this.boardLeft + data['Wall'][i][1] * UI.puzzle.cellSize[0], this.boardTop + data['Wall'][i][0] * UI.puzzle.cellSize[1]), id))
            id += 1
        }

        for (let i = 0; i < data['Thing'].length; i++) {
            let tempThing = data['Thing'][i]
            if (tempThing['Type'] === 'Box') {
                this.cell[tempThing['Position'][0]][tempThing['Position'][1]] = new Box(tempThing, id)
                let tempThingRender = new RenderBox(new Vector(this.boardLeft + tempThing['Position'][1] * UI.puzzle.cellSize[0], this.boardTop + tempThing['Position'][0] * UI.puzzle.cellSize[1]), id, tempThing['Pushable'], id)
                this.thingRender.push(tempThingRender)
            }
            id += 1
        }

        this.playerPosition = [data['Start'][0], data['Start'][1]]
        this.playerRenderPosition = new Vector(this.boardLeft + data['Start'][1] * UI.puzzle.cellSize[0], this.boardTop + data['Start'][0] * UI.puzzle.cellSize[1])
        this.goal = [data['Goal'][0], data['Goal'][1]]
        this.goalRenderPosition = new Vector(this.boardLeft + data['Goal'][1] * UI.puzzle.cellSize[0], this.boardTop + data['Goal'][0] * UI.puzzle.cellSize[0])
    }

    render() {
        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                context.strokeRect(this.boardLeft + UI.puzzle.cellSize[0] * j, this.boardTop + UI.puzzle.cellSize[1] * i, UI.puzzle.cellSize[0], UI.puzzle.cellSize[1])
            }
        }

        for (let i = 0; i < this.thingRender.length; i++) {
            let tempThingRender = this.thingRender[i]

            if (tempThingRender.type === 'Wall') {
                context.fillStyle = 'Black'
                context.fillRect(tempThingRender.position.x, tempThingRender.position.y, 64, 64)
            }

            if (tempThingRender.type === 'Box') {
                context.fillStyle = 'Brown'
                context.fillRect(tempThingRender.position.x, tempThingRender.position.y, 64, 64)
            }
        }

        context.fillStyle = 'Orange'
        context.fillRect(this.playerRenderPosition.x, this.playerRenderPosition.y, 64, 64)

        context.fillStyle = 'Blue'
        context.fillRect(this.goalRenderPosition.x, this.goalRenderPosition.y, 64, 64)
    }

    movePlayer(direction) {
        if (direction === 'Up') {
            if (this.cell[this.playerPosition[0] - 1][this.playerPosition[1]].solid === false) {
                this.playerPosition[0] -= 1
                this.playerRenderPosition.y -= UI.puzzle.cellSize[1]
            } else if (this.cell[this.playerPosition[0] - 1][this.playerPosition[1]].pushable === true) {
                if (this.cell[this.playerPosition[0] - 2][this.playerPosition[1]].solid === false) {
                    let movedId = this.cell[this.playerPosition[0] - 1][this.playerPosition[1]].id
                    let temp = this.cell[this.playerPosition[0] - 2][this.playerPosition[1]]
                    this.cell[this.playerPosition[0] - 2][this.playerPosition[1]] = this.cell[this.playerPosition[0] - 1][this.playerPosition[1]]
                    this.cell[this.playerPosition[0] - 1][this.playerPosition[1]] = temp
                    for (let i = 0; i < this.thingRender.length; i++) {
                        if (movedId === this.thingRender[i].id) {
                            this.thingRender[i].position.y -= UI.puzzle.cellSize[1]
                        }
                    }
                    this.playerPosition[0] -= 1
                    this.playerRenderPosition.y -= UI.puzzle.cellSize[1]
                }
            }
        } else if (direction === 'Left') {
            if (this.cell[this.playerPosition[0]][this.playerPosition[1] - 1].solid === false) {
                this.playerPosition[1] -= 1
                this.playerRenderPosition.x -= UI.puzzle.cellSize[0]
            }
        } else if (direction === 'Down') {
            if (this.cell[this.playerPosition[0] + 1][this.playerPosition[1]].solid === false) {
                this.playerPosition[0] += 1
                this.playerRenderPosition.y += UI.puzzle.cellSize[1]
            }
        } else if (direction === 'Right') {
            if (this.cell[this.playerPosition[0]][this.playerPosition[1] + 1].solid === false) {
                this.playerPosition[1] += 1
                this.playerRenderPosition.x += UI.puzzle.cellSize[0]
            }
        }
        this.checkBoard()
    }

    interact() {

    }

    checkBoard() {

    }
}

class CellElement {
    solid = false
    pushable = false
    type = ''
    id = 0
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
    constructor(id) {
        super()
        this.id = id
        this.solid = true
        this.pushable = false
        this.type = 'Wall'
    }
}

class Box extends CellElement {
    constructor(properties, id) {
        super()
        this.id = id
        this.solid = properties['Solid']
        this.pushable = properties['Pushable']
        this.type = 'Box'
    }
}

class RenderObject {
    type = ''
    position = 0

    constructor() {
    }
}

class RenderWall extends RenderObject {
    pinned = false
    constructor(position, id) {
        super()
        this.id = id
        this.type = 'Wall'
        this.position = new Vector(position.x, position.y)
    }
}

class RenderBox extends RenderObject {
    pinned = false
    constructor(position, id, movable) {
        super()
        this.id = id
        this.type = 'Box'
        this.position = new Vector(position.x, position.y)
        if (movable === false) {
            this.pinned = true
        }
    }
}

class Vector {
    x = 0
    y = 0
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
