import { ISequenceElement } from "./ISequenceElement";
export class Node implements ISequenceElement {
    x: number;
    y: number;
    w: number;
    h: number;
    static create(title: string): Node {
        return new this(title);
    }
    constructor(public title: string) {
    }
    toSVG(): string {
        throw "Not implemented";
    }
}
