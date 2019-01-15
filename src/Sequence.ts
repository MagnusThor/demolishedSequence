import { ISequenceElement } from "./ISequenceElement";
import { SequenceNode } from './SequenceNode';
import { SequenceElementBase } from "./SequenceElementBase";
import { NodeMap } from "./NodeMap";



export class Sequence extends SequenceElementBase implements ISequenceElement {
    nodes: NodeMap<string,SequenceNode>
    constructor(public title: string, width: number, height: number) {
        super(width, height);
        this.nodes =  new NodeMap<string,SequenceNode>();
        console.log(this);
        
    }
    addSequenceNode(node:SequenceNode){
        this.nodes.set(node.title,node);
    }
    save(): void {
        throw "Not implemented";
    }
    toGraph(): any {
        throw "Not implemented";
    }

    toSVG(): string {
        const svg = `<svg class="dm-sequence" width='${this.width}' height='${this.height}'>
        ${this.nodes.toSVG()}</svg>`;
        return svg;

    }

  
}

