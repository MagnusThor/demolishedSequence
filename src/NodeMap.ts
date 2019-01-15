import { SequenceNode } from './SequenceNode';
export class NodeMap<K,V > extends Map<K,SequenceNode>{
    toSVG(): string {
        let svg: string;
        this.forEach((v: SequenceNode, k: any) => {
            svg += `${v.toSVG()}\n`;
        });
        return svg;
    }
    constructor(){
        super();
    }  
}
