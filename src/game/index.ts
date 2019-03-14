import {IGame, ILevel, IGameObject, Color, Key, PressedKey} from "./game";
import Paddle from "./paddle";
import Level from "./level";

const COLOR: Color = {
    PADDLE: '#b58900',
    BALL: '#d33682',
    BRICK: '#b58900'
};

const KEYBOARD: Key = {
    Right: 'Right',
    Left: 'Left',
    ArrowRight: 'ArrowRight',
    ArrowLeft: 'ArrowLeft',
    Space: ''
};

class Game implements IGame {
    private readonly context: CanvasRenderingContext2D;

    private readonly sceneWidth: number = 0;
    private readonly sceneHeight: number = 0;

    private Level: ILevel = null;
    private Paddle: IGameObject = null;

    private pressedKey: PressedKey = {
        Right: false,
        Left: false
    };

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');

        this.sceneHeight = this.canvas.height;
        this.sceneWidth = this.canvas.width;

        this.Level = new Level(this.sceneWidth, this.sceneHeight);
        this.Paddle = new Paddle(this.Level.paddleStartPosition.x, this.Level.paddleStartPosition.y, COLOR.PADDLE);

        this.setEvents();
    }

    start(): void {
        this.draw();

        requestAnimationFrame(() => this.loop());
    }

    stop(): void {
    }

    private loop(): void {
        this.update();
        this.draw();

        requestAnimationFrame(() => this.loop());
    }

    private update(): void {
        if(this.pressedKey.Right && this.Paddle.x < this.sceneWidth-Paddle.WIDTH) {
            this.Paddle.updatePosition({ x: this.Paddle.x+this.Level.paddleSpeed });
        } else if(this.pressedKey.Left && this.Paddle.x > 0) {
            this.Paddle.updatePosition({ x: this.Paddle.x-this.Level.paddleSpeed });
        }
    }

    private draw(): void {
        this.context.clearRect(0 , 0, this.canvas.width, this.canvas.height);

        this.Paddle.draw(this.context);
    }

    private setEvents(): void {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    private keyDownHandler = (e: KeyboardEvent): void => {
        if(e.key === KEYBOARD.Right || e.key === KEYBOARD.ArrowRight) {
            this.pressedKey.Right = true;
        } else if(e.key === KEYBOARD.Left || e.key === KEYBOARD.ArrowLeft) {
            this.pressedKey.Left = true;
        }
    };

    private keyUpHandler = (e: KeyboardEvent): void => {
        if(e.key === KEYBOARD.Right || e.key === KEYBOARD.ArrowRight) {
            this.pressedKey.Right = false;
        } else if(e.key === KEYBOARD.Left || e.key === KEYBOARD.ArrowLeft) {
            this.pressedKey.Left = false;
        }
    };
}

export default Game;
