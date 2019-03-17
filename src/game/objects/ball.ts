import {IGameObject, TPosition, TStep} from "../game";
import {circle} from '../painter';

class Ball implements IGameObject {
    static RADIUS: number = 10;

    step: TStep = {
        dx: 2,
        dy: -2
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
        circle(ctx, this.x, this.y, Ball.RADIUS, this.color);
    }

    updatePosition(position: TPosition): void {
        this.x = position.x;
        this.y = position.y;
    }
}

export default Ball;
