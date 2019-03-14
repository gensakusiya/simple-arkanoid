export interface IGame {
    start(): void;
    stop(): void;
}

export interface ILevel {
    level: number;
    score: number;
    lives: number;
    speed: number;

    paddleStartPosition: Position;

    next(): void;
}

interface IGameObject {
    x: number;
    y: number;
    color: string;

    draw(ctx: CanvasRenderingContext2D): void;
    updatePosition(position: Position): void;
}

export type Position = {
    x: number;
    y: number;
}

export type Color = {
    PADDLE: string;
    BALL: string;
    BRICK: string;
}

export type Key = {
    Right: string;
    Left: string;
    ArrowRight: string;
    ArrowLeft: string;
    Space: string;
}

export type PressedKey = {
    Right: boolean;
    Left: boolean;
}
