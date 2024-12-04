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

let place
let board

let hubBoard
let hubRender
let hubPlayer
let hubGoal

let inputBlock = false
let inputBlockTime = 0
