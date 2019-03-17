export function rectangle(canvas: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string) {
    canvas.beginPath();
    canvas.rect(x, y, width, height);
    canvas.fillStyle = color;
    canvas.fill();
    canvas.closePath();
}

export function circle(canvas: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
    canvas.beginPath();
    canvas.arc(x, y, radius, 0, Math.PI*2);
    canvas.fillStyle = color;
    canvas.fill();
    canvas.closePath();
}
