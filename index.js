"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequence_1 = require("./src/Sequence");
const SequenceNode_1 = require("./src/SequenceNode");
class MySequence {
}
exports.MySequence = MySequence;
document.addEventListener("DOMContentLoaded", (e) => {
    const sequence = new Sequence_1.Sequence("foo", 800, 600);
    sequence.addSequenceNode(SequenceNode_1.SequenceNode.create("Node 1", 100, 100, 20, 20));
    sequence.addSequenceNode(SequenceNode_1.SequenceNode.create("Node 2", 300, 100, 20, 20));
    const container = document.querySelector("div");
    container.innerHTML = sequence.toSVG();
});
