import {IGame, ILevel, IGameObject, TPosition, TColor, TKey, TPressedKey} from "./game";
import Paddle from "./objects/paddle";
import Level from "./level";
import Ball from "./objects/ball";
import Brick from "./objects/brick";

const COLOR: TColor = {
    PADDLE: '#b58900',
    BALL: '#d33682',
    BRICK: '#b58900',
    TEXT: '#268bd2'
};

const KEYBOARD: TKey = {
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
    private Ball: IGameObject = null;
    private Bricks: Array<IGameObject> = null;

    private pressedKey: TPressedKey = {
        Right: false,
        Left: false
    };

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');

        this.sceneHeight = this.canvas.height;
        this.sceneWidth = this.canvas.width;

        this.Level = new Level(this.sceneWidth, this.sceneHeight);
        this.Paddle = new Paddle(this.Level.paddleStartPosition.x, this.Level.paddleStartPosition.y, COLOR.PADDLE);
        this.Ball = new Ball(this.Level.ballStartPosition.x, this.Level.ballStartPosition.y, COLOR.BALL);
        this.Bricks = [];

        for (let column = 0; column < this.Level.columnCount; column++) {
            for (let row = 0; row < this.Level.rowCount; row++) {
                const brickX = (column*(Brick.WIDTH+this.Level.brickPadding))+this.Level.brickOffsetLeft;
                const brickY = (row*(Brick.HEIGHT+this.Level.brickPadding))+this.Level.brickOffsetTop;

                this.Bricks.push(new Brick(brickX, brickY, COLOR.BRICK));
            }
        }

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

        if (this.Level.lives > 0 && this.Level.score !== this.Bricks.length) {
            this.draw();
            requestAnimationFrame(() => this.loop());
        } else {
            const message = this.Level.score === this.Bricks.length ? 'YOU WIN, CONGRATULATIONS!' : 'GAME OVER';
            alert(message);
            window.location.reload();
        }
    }

    private update(): boolean {
        if(this.pressedKey.Right && this.Paddle.x < this.sceneWidth-Paddle.WIDTH) {
            this.Paddle.updatePosition({ x: this.Paddle.x+this.Paddle.step.dx });
        } else if(this.pressedKey.Left && this.Paddle.x > 0) {
            this.Paddle.updatePosition({ x: this.Paddle.x-this.Paddle.step.dx });
        }

        let ballMove: TPosition = {
            x: this.Ball.x+(this.Ball.step.dx*this.Level.speed),
            y: this.Ball.y+(this.Ball.step.dy*this.Level.speed)
        };

        if (ballMove.x > this.canvas.width-Ball.RADIUS || ballMove.x < Ball.RADIUS) {
            this.Ball.step.dx = -this.Ball.step.dx;
        }
        if (ballMove.y < Ball.RADIUS || ballMove.y > this.canvas.height-Ball.RADIUS) {
            this.Ball.step.dy = -this.Ball.step.dy;
        } else if (ballMove.y+Ball.RADIUS > this.Paddle.y) {
            if (this.Paddle.x < ballMove.x+Ball.RADIUS && this.Paddle.x+Paddle.WIDTH > ballMove.x) {
                this.Ball.step.dy = -this.Ball.step.dy;
            } else {
                this.Level.lives--;

                if (this.Level.lives > 0) {
                    ballMove = {
                        ...this.Level.ballStartPosition
                    };
                    this.Ball.step.dy = -this.Ball.step.dy;
                } else {
                    return false;
                }
            }
        }

        this.Ball.updatePosition(ballMove);
        this.collisionDetection();
        return true;
    }

    private draw(): void {
        this.context.clearRect(0 , 0, this.canvas.width, this.canvas.height);

        this.Paddle.draw(this.context);
        this.Ball.draw(this.context);
        this.Bricks.forEach((brick: IGameObject) => {
            if (brick.status) {
                brick.draw(this.context);
            }
        });

        // todo: move to text component
        this.context.font = "16px Arial";
        this.context.fillStyle = COLOR.TEXT;
        this.context.fillText(`Lives: ${this.Level.lives}`, this.sceneWidth-65, 20);
        this.context.font = "16px Arial";
        this.context.fillStyle = COLOR.TEXT;
        this.context.fillText(`Score: ${this.Level.score}`, 8, 20);
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

    private collisionDetection = (): void => {
        for (let i = 0; i < this.Bricks.length; i++) {
            const brick: IGameObject = this.Bricks[i];
            if (brick.status
                && this.Ball.x > brick.x && this.Ball.x < brick.x+Brick.WIDTH
                && this.Ball.y > brick.y && this.Ball.y < brick.y+Brick.HEIGHT) {
                brick.status = false;
                this.Ball.step.dy = -this.Ball.step.dy;
                this.Level.score++;
            }
        }
    };
}

export default Game;
