"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeMap extends Map {
    constructor() {
        super();
    }
    toSVG() {
        let svg;
        this.forEach((v, k) => {
            svg += `${v.toSVG()}\n`;
        });
        return svg;
    }
}
exports.NodeMap = NodeMap;
