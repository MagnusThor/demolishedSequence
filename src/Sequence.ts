import { ISequenceElement } from "./ISequenceElement";
import { Node } from "./Node";

export class SequenceElementBase {
    constructor(public width: number, public height: number) {

    }
}

export class Sequence extends SequenceElementBase implements ISequenceElement {
    nodes: Array<Node>
    constructor(public title: string, width: number, height: number) {
        super(width, height);
    }

    save(): void {

    }

    toGraph(): any {

    }

    toSVG(): string {
        const svg = `<svg class="dm-sequence" width='${this.width}' height='${this.height}'></svg>`;
        return svg;

    }

    render(): string {
        throw "Not implemented"
    }

}

