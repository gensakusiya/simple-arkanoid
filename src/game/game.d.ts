export interface IGame {
    start(): void;
    stop(): void;
}

export interface ILevel {
    level: number;
    score: number;
    lives: number;
    speed: number;
    paddleSpeed: number;

    paddleStartPosition: TPosition;
    ballStartPosition: TPosition;

    brickPadding: number;
    brickOffsetTop: number;
    brickOffsetLeft: number;

    rowCount: number;
    columnCount: number;

    next(): void;
}

interface IGameObject {
    x: number;
    y: number;
    color: string;
    step?: TStep;
    status?: boolean;

    draw(ctx: CanvasRenderingContext2D): void;
    updatePosition?(position: TPosition): void;
}

export type TPosition = {
    x?: number;
    y?: number;
}

export type TColor = {
    PADDLE: string;
    BALL: string;
    BRICK: string;
    TEXT: string;
}

export type TKey = {
    Right: string;
    Left: string;
    ArrowRight: string;
    ArrowLeft: string;
    Space: string;
}

export type TPressedKey = {
    Right: boolean;
    Left: boolean;
}

export type TStep = {
    dx: number,
    dy: number
}
