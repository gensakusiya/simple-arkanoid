import Game from './game';

window.addEventListener("load", () => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
    const game = new Game(canvas);
});
