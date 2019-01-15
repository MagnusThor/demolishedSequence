"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connector = (function () {
    function Connector(a, b) {
        this.a = a;
    }
    Connector.prototype.toSVG = function () {
        throw "Not implemented";
    };
    Connector.create = function (a, b) {
        return new this(a, b);
    };
    return Connector;
}());
exports.Connector = Connector;
