class Food {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    generate() {
        this.x = (Math.floor(Math.random() * ROWS - 1) + 1) * SIZE;
        this.y = (Math.floor(Math.random() * COLUMNS - 1) + 1) * SIZE;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, SIZE, SIZE);
    }

    checkLocation(snake){
        for (let i = 0; i < snake.tail.length; i++){
            if(this.x === snake.tail[i].x && this.y === snake.tail[i].y){
                return true;
            }
        }
        return false;
    }
}