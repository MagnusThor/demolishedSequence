"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceElementBase_1 = require("./SequenceElementBase");
const NodeMap_1 = require("./NodeMap");
class Sequence extends SequenceElementBase_1.SequenceElementBase {
    constructor(title, width, height) {
        super(width, height);
        this.title = title;
        this.nodes = new NodeMap_1.NodeMap();
        console.log(this);
    }
    addSequenceNode(node) {
        this.nodes.set(node.title, node);
    }
    save() {
        throw "Not implemented";
    }
    toGraph() {
        throw "Not implemented";
    }
    toSVG() {
        const svg = `<svg class="dm-sequence" width='${this.width}' height='${this.height}'>
        ${this.nodes.toSVG()}</svg>`;
        return svg;
    }
}
exports.Sequence = Sequence;
