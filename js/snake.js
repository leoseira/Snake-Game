class Snake {
    constructor() {
        this.x = 300;
        this.y = 300;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.speed = SPEED;
        this.foodAmount = 0;
        this.tail = [];

    }
    draw() {
        for (let i =0; i < this.tail.length;i++){
            ctx.fillStyle = pattern;
            ctx.fillRect(this.tail[i].x, this.tail[i].y,SIZE,SIZE)
        }
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, SIZE, SIZE);
    }

    update() {
        for (let i=0; i < this.tail.length -1;i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.foodAmount -1] = {x: this.x, y: this.y }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width){
            this.x = 0;
        }
        if (this.y > canvas.height){
            this.y = 0;
        }
        if (this.x < 0){
            this.x = canvas.width;
        }
        if (this.y < 0){
            this.y = canvas.height;
        }
    }

    changeDirection(direction) {
        if (direction === 'Up' && currentDirection !== 'Down'){
            this.xSpeed = 0;
            this.ySpeed = -this.speed;
            currentDirection = direction;
        }
        if (direction === 'Down' && currentDirection !== 'Up'){
            this.xSpeed = 0;
            this.ySpeed = this.speed;
            currentDirection = direction;
        }
        if (direction === 'Right' && currentDirection !== 'Left'){
            this.xSpeed = this.speed;
            this.ySpeed = 0;
            currentDirection = direction;
        }
        if (direction === 'Left' && currentDirection !== 'Right'){
            this.xSpeed = -this.speed;
            this.ySpeed = 0;
            currentDirection = direction;
        }
    }

    checkEat(food){
        if (this.x === food.x && this.y === food.y){
            this.foodAmount++;
            return true;
        }
        return false;
    }

    checkCollision(){
        for (let i =0; i < this.tail.length; i++){
            if (this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.foodAmount = 0;
                this.tail = [];
                this.xSpeed = 0;
                this.ySpeed = 0;
                currentDirection = null;
            }
        }
    }


}

