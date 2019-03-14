import Game from './game';
import {IGame} from "./game/game";

window.addEventListener("load", () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("scene");
    const game: IGame = new Game(canvas);
    game.start();
});
