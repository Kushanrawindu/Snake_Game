import { update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'

let lastRenderTime =0

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render')
    lastRenderTime = currentTime

    update()    //update snake position
    draw()      //draw all the things i the screen based on the update()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
}

function draw(){
    drawSnake()
}