"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequence_1 = require("./src/Sequence");
var MySequence = (function () {
    function MySequence() {
    }
    return MySequence;
}());
exports.MySequence = MySequence;
document.addEventListener("DOMContentLoaded", function (e) {
    var sequence = new Sequence_1.Sequence("foo", 800, 600);
    var container = document.querySelector("div");
    container.innerHTML = sequence.toSVG();
});
