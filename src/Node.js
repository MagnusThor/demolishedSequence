"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = (function () {
    function Node(title) {
        this.title = title;
    }
    Node.create = function (title) {
        return new this(title);
    };
    Node.prototype.toSVG = function () {
        throw "Not implemented";
    };
    return Node;
}());
exports.Node = Node;
