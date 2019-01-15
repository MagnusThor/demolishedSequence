import { ISequenceElement } from "./ISequenceElement";

export class SequenceNode implements ISequenceElement {
    static create(title: string,x:number,y:number,w:number,h:number): SequenceNode {
        return new this(title,x,y,w,h);
    }
    constructor(public title: string,public x:number,public y:number,public w:number,public h:number) {
    }
    public toSVG(): string {        
        const svg = `<rect x='${this.x}' y='${this.y}' width='${this.w}' height='${this.h}'></rect>`
        return svg;
    }
}
