import {TStep} from "../game";
import {rectangle} from '../painter';

import GameObject from './main';

class Paddle extends GameObject {
    static WIDTH: number = 80;
    static HEIGHT: number = 10;

    step: TStep = {
        dx: 7,
        dy: 0
    };

    draw(ctx: CanvasRenderingContext2D): void {
        rectangle(ctx, this.x, this.y, Paddle.WIDTH, Paddle.HEIGHT, this.color);
    }
}

export default Paddle;
