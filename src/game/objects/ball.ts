import {TStep} from "../game";
import {circle} from '../painter';

import GameObject from './main';

class Ball extends GameObject {
    static RADIUS: number = 10;

    step: TStep = {
        dx: 2,
        dy: -2
    };

    draw(ctx: CanvasRenderingContext2D): void {
        circle(ctx, this.x, this.y, Ball.RADIUS, this.color);
    }
}

export default Ball;
