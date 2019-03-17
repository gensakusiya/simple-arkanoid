import {IGameObject, TPosition, TStep} from "../game";
import {rectangle} from '../painter';

class Paddle implements IGameObject {
    static WIDTH: number = 80;
    static HEIGHT: number = 10;

    step: TStep = {
        dx: 7,
        dy: 0
    };

    x: number = 0;
    y: number = 0;
    color: string = '';

    constructor(x: number = 0, y: number = 0, color: string = '') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        rectangle(ctx, this.x, this.y, Paddle.WIDTH, Paddle.HEIGHT, this.color);
    }

    updatePosition(position: TPosition): void {
        this.x = position.x;
    }
}

export default Paddle;
