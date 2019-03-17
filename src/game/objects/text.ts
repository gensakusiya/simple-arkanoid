import {text} from '../painter';

import {UIElement} from './main';

class Text extends UIElement {
    draw(ctx: CanvasRenderingContext2D): void {
        text(ctx, this.x, this.y, this.text, this.color);
    }
}

export default Text;
