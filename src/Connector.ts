import { SequenceNode } from "./SequenceNode";
import { ISequenceElement } from './ISequenceElement';
export class Connector implements ISequenceElement {
    toSVG(): string {
        throw "Not implemented";
    }
    constructor(public a: SequenceNode, b: SequenceNode) {
    }
    static create(a: SequenceNode, b: SequenceNode): Connector {
        return new this(a, b);
    }
}
