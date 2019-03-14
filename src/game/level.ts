import {ILevel, Position} from "./game";
import Paddle from "./paddle";

class Level implements ILevel {
    level: number = 1;
    score: number = 0;
    lives: number = 3;
    speed: number = 1;
    paddleSpeed: number = 7;

    paddleStartPosition: Position = null;

    constructor(sceneWidth: number, sceneHeight: number) {
        const paddleX: number = (sceneWidth - Paddle.WIDTH) / 2;
        const paddleY: number = sceneHeight - (Paddle.HEIGHT * 2);

        this.paddleStartPosition = {
            x: paddleX,
            y: paddleY
        }
    }

    next(): void {
        this.level++;
        this.speed++;
        this.score = 0;
    }
}

export default Level;
