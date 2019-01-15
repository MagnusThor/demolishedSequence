"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SequenceNode {
    constructor(title, x, y, w, h) {
        this.title = title;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    static create(title, x, y, w, h) {
        return new this(title, x, y, w, h);
    }
    toSVG() {
        const svg = `<rect x='${this.x}' y='${this.y}' width='${this.w}' height='${this.h}'></rect>`;
        return svg;
    }
}
exports.SequenceNode = SequenceNode;
