class Game {
    private readonly context: CanvasRenderingContext2D;

    private sceneWidth: number = 0;
    private sceneHeight: number = 0;

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');

        this.sceneHeight = this.canvas.height;
        this.sceneWidth = this.canvas.width;
    }

    update(): void {}

    draw(): void {}

    private keyDown(): void {}

    private keyUp(): void {}

    private mouseEvent(): void {}
}

export default Game;
