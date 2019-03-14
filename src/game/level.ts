import {ILevel, Position} from "./game";
import Paddle from "./paddle";

class Level implements ILevel {
    level: number = 1;
    score: number = 0;
    lives: number = 3;
    speed: number = 1;
    paddleSpeed: number = 1;

    paddleStartPosition: Position = null;
    ballStartPosition: Position = null;

    constructor(sceneWidth: number, sceneHeight: number) {
        const paddleX: number = (sceneWidth - Paddle.WIDTH) / 2;
        const paddleY: number = sceneHeight - (Paddle.HEIGHT * 2);

        const ballX: number = sceneWidth / 2;
        const ballY: number = sceneHeight - 30;

        this.paddleStartPosition = {
            x: paddleX,
            y: paddleY
        };
        this.ballStartPosition = {
            x: ballX,
            y: ballY
        };
    }

    next(): void {
        this.level++;
        this.speed++;
        this.score = 0;
    }
}

export default Level;
