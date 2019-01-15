"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceElementBase = (function () {
    function SequenceElementBase(width, height) {
        this.width = width;
        this.height = height;
    }
    return SequenceElementBase;
}());
exports.SequenceElementBase = SequenceElementBase;
var Sequence = (function (_super) {
    __extends(Sequence, _super);
    function Sequence(title, width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.title = title;
        return _this;
    }
    Sequence.prototype.save = function () {
    };
    Sequence.prototype.toGraph = function () {
    };
    Sequence.prototype.toSVG = function () {
        var svg = "<svg class=\"dm-sequence\" width='" + this.width + "' height='" + this.height + "'></svg>";
        return svg;
    };
    Sequence.prototype.render = function () {
        throw "Not implemented";
    };
    return Sequence;
}(SequenceElementBase));
exports.Sequence = Sequence;
