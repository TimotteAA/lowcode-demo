import React from "react";

export const initialCanvas: ICanvas = {
    title: "未命名",
    // 页面样式
    style: {
        width: 320,
        height: 568,
        backgroundColor: "#ffffff",
        backgroundImage: "",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // boxSizing: "content-box",
    },
    // 组件
    // cmps: [],
    // 测试数据
    cmps: [
        {
            key: "123",
            desc: "文本",
            value: "文本",
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: 100,
                height: 30,
                fontSize: 12,
                color: "red"
            }
        }
    ]
}

export interface ICanvas {
    title: string;
    style: React.CSSProperties;
    cmps: Record<string, any>[];
}

// 数据store
class Canvas {
    private canvas: ICanvas;
    private listeners: Function[] = [];
    constructor(canvas?: ICanvas) {
        this.canvas = canvas ?? initialCanvas;
    }

    // 订阅
    addListener(listener: Function) {
        this.listeners.push(listener);
        const unsubscribe = () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        }
        return unsubscribe;
    }

    // get
    getCanvas() {
        return { ...this.canvas }
    }

    // set
    setCanvas(newCanvas: ICanvas) {
        this.canvas = {...this.canvas, ...newCanvas};
    }

    getCanvasCmps() {
        return [...this.canvas.cmps];
    }

    getCanvasBkg() {
        return {...this.canvas.style};
    }

    addCmp(...cmps: Record<string, any>[]) {
        // 添加组件
        this.canvas.cmps = [...this.canvas.cmps, ...cmps];
        this.listeners.forEach(l => l());
    }
}

export default Canvas;
