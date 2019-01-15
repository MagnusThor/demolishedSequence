"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connector {
    constructor(a, b) {
        this.a = a;
    }
    toSVG() {
        throw "Not implemented";
    }
    static create(a, b) {
        return new this(a, b);
    }
}
exports.Connector = Connector;
