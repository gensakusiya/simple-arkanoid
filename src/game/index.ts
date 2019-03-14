import {IGame, Color} from "./game";
import Paddle from "./paddle";

const COLOR: Color = {
    PADDLE: '#b58900',
    BALL: '#d33682',
    BRICK: '#b58900'
};

class Game implements IGame {
    private readonly context: CanvasRenderingContext2D;

    private sceneWidth: number = 0;
    private sceneHeight: number = 0;

    private Paddle: Paddle = null;

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');

        this.sceneHeight = this.canvas.height;
        this.sceneWidth = this.canvas.width;

        this.Paddle = new Paddle(0, 0, COLOR.PADDLE);

        this.setEvents();
    }

    start(): void {
        this.draw();
    }

    stop(): void {
    }

    private loop(): void {

    }

    private update(): void {
    }

    private draw(): void {
        this.Paddle.draw(this.context);
    }

    private setEvents(): void {
    }

    private keyDown(): void {
    }

    private keyUp(): void {
    }

    private mouseEvent(): void {
    }
}

export default Game;
