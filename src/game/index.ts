import {IGame} from "./game";

class Game implements IGame {
    private readonly context: CanvasRenderingContext2D;

    private sceneWidth: number = 0;
    private sceneHeight: number = 0;

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');

        this.sceneHeight = this.canvas.height;
        this.sceneWidth = this.canvas.width;

        this.setEvents();
    }

    start(): void {

    }

    stop(): void {
    }

    private loop(): void {

    }

    private update(): void {
    }

    private draw(): void {
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
