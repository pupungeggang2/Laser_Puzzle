let canvas
let context

let gameLoop
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let cursor = {
    title: -1,
    menu: -1
}

let selected = {
    level: 0,
}

let board
