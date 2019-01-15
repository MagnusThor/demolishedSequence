import { Sequence } from './src/Sequence';

export class MySequence {

}


document.addEventListener("DOMContentLoaded" ,(e:any) => {
    const sequence = new Sequence("foo",800,600);
    
     const container = document.querySelector("div");

     container.innerHTML = sequence.toSVG();


});

