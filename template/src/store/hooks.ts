import Canvas, {ICanvas} from "./canvas";
import { useRef, useContext } from "react";
import canvasContext from "./context"

export function useCanvas(canvas?: Canvas) {
    const canvasRef = useRef<Canvas>();

    if (!canvasRef.current) {
        if (canvas) {
            canvasRef.current = canvas;
        } else {
            canvasRef.current = new Canvas()
        }
    }

    return canvasRef.current;
}

export function useCanvasCmps() {
    const canvas = useCanvas();
    return canvas.getCanvasCmps();
}

export function getContext() {
    return useContext(canvasContext);
}
