import {IGameObject} from "../game";
import {rectangle} from '../painter';

class Brick implements IGameObject {
    static WIDTH = 75;
    static HEIGHT = 20;

    x: number;
    y: number;
    color: string;
    status: boolean = true;

    constructor(x: number = 0, y: number = 0, color: string = '') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        rectangle(ctx, this.x, this.y, Brick.WIDTH, Brick.HEIGHT, this.color);
    }
}

export default Brick;
