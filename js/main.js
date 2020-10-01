// Declare all needed global variables:
const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');
const SPEED = 30;
const SIZE = 30;
const ROWS = canvas.width / SIZE;
const COLUMNS = canvas.height / SIZE;

let currentDirection;
let snake;
let food;
let snakeSkin = document.getElementById('skin');

let pattern = ctx.createPattern(snakeSkin, 'repeat');
console.log(pattern)

//Init
function setup(){
    snake = new Snake();
    food = new Food();
    food.generate()

    window.setInterval(() => {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        food.draw()
        snake.update()
        snake.draw()
        if (food.checkLocation(snake)){
            food.generate()
        }
        if (snake.checkEat(food)){
            food.generate()
        }
        snake.checkCollision()
        document.getElementById('score').innerText = "Score: " + snake.foodAmount;
    }, 100)
}

//Bat su kien dieu khien snake:

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '')
    snake.changeDirection(direction);
}))



setup()