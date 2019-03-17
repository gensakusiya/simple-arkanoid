export function rectangle(canvas: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string): void {
    canvas.beginPath();
    canvas.rect(x, y, width, height);
    canvas.fillStyle = color;
    canvas.fill();
    canvas.closePath();
}

export function circle(canvas: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string): void {
    canvas.beginPath();
    canvas.arc(x, y, radius, 0, Math.PI*2);
    canvas.fillStyle = color;
    canvas.fill();
    canvas.closePath();
}

export function text(canvas: CanvasRenderingContext2D, x: number, y: number, text: string, color: string): void {
    canvas.font = "16px Arial";
    canvas.fillStyle = color;
    canvas.fillText(text, x, y);
}
