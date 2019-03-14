import {IGameObject, Position} from "./game";

class Ball implements IGameObject {
    static RADIUS: number = 10;

    x: number = 0;
    y: number = 0;
    color: string = '';

    constructor(x: number = 0, y: number = 0, color: string = '') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Ball.RADIUS, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    updatePosition(position: Position): void {
        this.x = position.x;
        this.y = position.y;
    }
}

export default Ball;
