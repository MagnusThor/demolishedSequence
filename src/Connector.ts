import { ISequenceElement } from "./ISequenceElement";
import { Node } from "./Node";
export class Connector implements ISequenceElement {
    toSVG(): string {
        throw "Not implemented";
    }
    constructor(public a: Node, b: Node) {
    }
    static create(a: Node, b: Node): Connector {
        return new this(a, b);
    }
}
