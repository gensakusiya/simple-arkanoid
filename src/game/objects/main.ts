import {IGameObject, IUIElement, TPosition, TStep} from '../game';

export default abstract class GameObject implements IGameObject {
    x: number;
    y: number;
    status: boolean;
    color: string;

    step: TStep;

    public constructor(x: number = 0, y: number = 0, color: string = '') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D): void {
    }

    updatePosition(position: TPosition): void {
        if (typeof position.x === 'number') {
            this.x = position.x;
        }

        if (typeof position.y === 'number') {
            this.y = position.y;
        }
    }
}

export abstract class UIElement implements IUIElement {
    y: number;
    x: number;
    color: string;
    text: string;

    public constructor(x: number = 0, y: number = 0, color: string = '') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D): void {
    }
}
