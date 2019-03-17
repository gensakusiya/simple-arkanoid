import {rectangle} from '../painter';

import GameObject from "./main";

class Brick extends GameObject {
    static WIDTH = 75;
    static HEIGHT = 20;

    status: boolean = true;

    draw(ctx: CanvasRenderingContext2D): void {
        rectangle(ctx, this.x, this.y, Brick.WIDTH, Brick.HEIGHT, this.color);
    }
}

export default Brick;
