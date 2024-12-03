function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

function pointInsideCircle(x, y, cx, cy, r) {
    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2
}

class VectorOP {
    static add(vec1, vec2) {
        return new Vector(vec1.x + vec2.x, vec1.y + vec2.y)
    }

    static sub(vec1, vec2) {
        return new Vector(vec1.x - vec2.x, vec1.y - vec2.y)
    }

    static norm(vec) {
        return Math.sqrt(vec.x ** 2 + vec.y ** 2)
    }

    static normalize(vec) {
        let norm = this.norm(vec)
        return new Vector(vec.x / norm, vec.y / norm)
    }
}
