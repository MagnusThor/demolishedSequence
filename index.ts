import { Sequence } from './src/Sequence';
import { SequenceNode } from './src/SequenceNode';

export class MySequence {

}


document.addEventListener("DOMContentLoaded", (e: any) => {

    const sequence = new Sequence("foo", 800, 600);

    sequence.addSequenceNode(SequenceNode.create("Node 1", 100, 100, 20, 20));
    sequence.addSequenceNode(SequenceNode.create("Node 2", 300, 100, 20, 20));

    const container = document.querySelector("div");

    container.innerHTML = sequence.toSVG();


});

